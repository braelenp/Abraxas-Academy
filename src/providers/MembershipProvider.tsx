import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { academyModules, blessings, runes } from '../lib/data';

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

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(publicKeyString));
      setProgress(raw ? (JSON.parse(raw) as ProgressRecord) : createEmptyProgress());
    } catch {
      setProgress(createEmptyProgress());
    }
  }, [publicKeyString]);

  useEffect(() => {
    if (!publicKeyString) {
      setIsMember(false);
      return;
    }

    try {
      setIsMember(localStorage.getItem(membershipKey(publicKeyString)) === 'active');
    } catch {
      setIsMember(false);
    }
  }, [publicKeyString]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey(publicKeyString), JSON.stringify(progress));
    } catch {
      // Ignore storage failures and keep in-memory state.
    }
  }, [progress, publicKeyString]);

  const identitySeed = publicKeyString ?? 'guest';
  const hash = hashString(identitySeed);
  const memberNumber = String(1000 + (hash % 9000));
  const memberRune = runes[hash % runes.length];
  const blessing = blessings[hash % blessings.length];

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

  const value: MembershipContextValue = {
    isConnected: connected,
    isMember,
    isActivating,
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
        return;
      }
      setIsActivating(true);
      await new Promise((resolve) => window.setTimeout(resolve, 1400));
      try {
        localStorage.setItem(membershipKey(publicKeyString), 'active');
      } catch {
        // Ignore storage failures and keep in-memory state.
      }
      setIsMember(true);
      setIsActivating(false);
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
