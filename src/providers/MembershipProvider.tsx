import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { academyModules, blessings, runes } from '../lib/data';
import { useGenesisNFT } from '../hooks/useGenesisNFT';

type ModuleProgress = {
  lessons: string[];
  homeworkDone: boolean;
  homeworkSubmitted?: boolean;
  quizDone: boolean;
};

type ProgressRecord = Record<string, ModuleProgress>;

type MembershipContextValue = {
  isConnected: boolean;
  isMember: boolean;
  isActivating: boolean;
  walletAddress: string | null;
  memberNumber: string;
  memberRune: string;
  blessing: string;
  progress: ProgressRecord;
  completionRate: number;
  completedBadges: string[];
  submittedHomework: Set<string>;
  activateMembership: () => Promise<void>;
  toggleLesson: (moduleId: string, lessonId: string) => void;
  completeHomework: (moduleId: string) => void;
  markHomeworkSubmitted: (moduleId: string) => void;
  completeQuiz: (moduleId: string) => void;
};

const MembershipContext = createContext<MembershipContextValue | null>(null);

function hashString(input: string) {
  let hash = 0;
  for (let index = 0; index < input.length; index += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(index);
    hash |= 0;
  }
  return Math.abs(hash);
}

function createEmptyProgress(): ProgressRecord {
  return Object.fromEntries(
    academyModules.map((module) => [
      module.id,
      {
        lessons: [],
        homeworkDone: false,
        homeworkSubmitted: false,
        quizDone: false,
      },
    ]),
  );
}

function storageKey(publicKey: string | null) {
  return publicKey ? `abraxas-academy:${publicKey}` : 'abraxas-academy:guest';
}

function membershipKey(publicKey: string) {
  return `abraxas-genesis:${publicKey}`;
}

type MembershipProviderProps = {
  children: React.ReactNode;
};

export function MembershipProvider({ children }: MembershipProviderProps) {
  const { connected, publicKey } = useWallet();
  const publicKeyString = publicKey?.toBase58() ?? null;
  const [progress, setProgress] = useState<ProgressRecord>(createEmptyProgress);
  const [isMember, setIsMember] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [submittedHomework, setSubmittedHomework] = useState<Set<string>>(new Set());

  // Get Genesis NFT data
  const { hasGenesisNFT, memberNumber: nftMemberNumber, memberRune: nftRune, memberBlessing: nftBlessing, isLoading: isNFTLoading } = useGenesisNFT();

  // Load progress from storage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(publicKeyString));
      setProgress(raw ? (JSON.parse(raw) as ProgressRecord) : createEmptyProgress());
    } catch {
      setProgress(createEmptyProgress());
    }
  }, [publicKeyString]);

  // Check membership status - prioritize Genesis NFT, fallback to localStorage
  useEffect(() => {
    if (!publicKeyString) {
      setIsMember(false);
      return;
    }

    // If they have a Genesis NFT, they're a member
    if (hasGenesisNFT) {
      setIsMember(true);
      // Store in localStorage as backup
      try {
        localStorage.setItem(membershipKey(publicKeyString), 'active');
      } catch {
        // Ignore storage errors
      }
      return;
    }

    // Fallback to localStorage (for development/demo)
    try {
      setIsMember(localStorage.getItem(membershipKey(publicKeyString)) === 'active');
    } catch {
      setIsMember(false);
    }
  }, [publicKeyString, hasGenesisNFT]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(publicKeyString), JSON.stringify(progress));
    } catch {
      // Ignore storage failures and keep in-memory state.
    }
  }, [progress, publicKeyString]);

  // Generate member data from NFT or fallback to hash-based
  const identitySeed = publicKeyString ?? 'guest';
  const hash = hashString(identitySeed);
  
  // Use NFT data if member has Genesis NFT, otherwise use hash-based fallback
  const memberNumber = nftMemberNumber ? String(nftMemberNumber) : String(1000 + (hash % 9000));
  const memberRune = nftRune || runes[hash % runes.length];
  const blessing = nftBlessing || blessings[hash % blessings.length];

  const completionRate = useMemo(() => {
    const totalTasks = academyModules.reduce((sum, module) => sum + module.lessons.length + 2, 0);
    const completedTasks = academyModules.reduce((sum, module) => {
      const moduleProgress = progress[module.id];
      return sum + moduleProgress.lessons.length + Number(moduleProgress.homeworkDone) + Number(moduleProgress.quizDone);
    }, 0);
    return Math.round((completedTasks / totalTasks) * 100);
  }, [progress]);

  const completedBadges = useMemo(
    () => academyModules.filter((module) => {
      const moduleProgress = progress[module.id];
      return module.lessons.every((lesson) => moduleProgress.lessons.includes(lesson.id)) && moduleProgress.homeworkDone && moduleProgress.quizDone;
    }).map((module) => module.badge),
    [progress],
  );

  const updateModule = (moduleId: string, updater: (current: ModuleProgress) => ModuleProgress) => {
    setProgress((current) => ({
      ...current,
      [moduleId]: updater(current[moduleId]),
    }));
  };

  // Get the mint function from the Genesis NFT hook
  const { mintGenesisNFT, isMinting: isNFTMinting, error: nftError } = useGenesisNFT();

  const value: MembershipContextValue = {
    isConnected: connected,
    isMember,
    isActivating: isActivating || isNFTMinting,
    walletAddress: publicKeyString,
    memberNumber,
    memberRune,
    blessing,
    progress,
    completionRate,
    completedBadges,
    submittedHomework,
    activateMembership: async () => {
      if (!publicKeyString) {
        console.error('No wallet connected');
        return;
      }

      setIsActivating(true);

      try {
        // Attempt to mint the Genesis NFT
        const mintResult = await mintGenesisNFT();

        if (mintResult.success) {
          // NFT minted successfully
          console.log('Genesis NFT minted:', mintResult.mint?.toString());
          // The isMember state will be updated automatically via the useGenesisNFT hook
          setIsMember(true);
        } else {
          // Minting failed, but allow local activation for development
          console.error('NFT minting failed:', mintResult.error);
          // Fallback: allow membership via localStorage
          localStorage.setItem(membershipKey(publicKeyString), 'active');
          setIsMember(true);
        }
      } catch (error) {
        console.error('Error during activation:', error);
        // Fallback: allow membership via localStorage
        try {
          localStorage.setItem(membershipKey(publicKeyString), 'active');
          setIsMember(true);
        } catch {
          // Ignore storage errors
        }
      } finally {
        setIsActivating(false);
      }
    },
    toggleLesson: (moduleId, lessonId) => {
      updateModule(moduleId, (current) => ({
        ...current,
        lessons: current.lessons.includes(lessonId)
          ? current.lessons.filter((item) => item !== lessonId)
          : [...current.lessons, lessonId],
      }));
    },
    completeHomework: (moduleId) => {
      updateModule(moduleId, (current) => ({
        ...current,
        homeworkDone: true,
      }));
    },
    markHomeworkSubmitted: (moduleId) => {
      setSubmittedHomework((prev) => new Set([...prev, moduleId]));
      updateModule(moduleId, (current) => ({
        ...current,
        homeworkSubmitted: true,
      }));
    },
    completeQuiz: (moduleId) => {
      updateModule(moduleId, (current) => ({
        ...current,
        quizDone: true,
      }));
    },
  };

  return <MembershipContext.Provider value={value}>{children}</MembershipContext.Provider>;
}

export function useMembership() {
  const context = useContext(MembershipContext);
  if (!context) {
    throw new Error('useMembership must be used within MembershipProvider');
  }
  return context;
}
