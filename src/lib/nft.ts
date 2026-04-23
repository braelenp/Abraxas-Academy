/**
 * Genesis NFT Configuration & Metadata
 * Abraxas Academy - Sovereign Regime Membership
 */

// ─── COLLECTION PARAMETERS ────────────────────────────────────────────────

export const GENESIS_NFT_COLLECTION = {
  name: 'Abraxas Genesis',
  symbol: 'ABRA-GEN',
  description: 'Founding member of the Abraxas Sovereign Regime. Access to Academy, lifetime yields, and the path to capital formation.',
  royaltyBps: 500, // 5% royalties
  sellerFeeBasisPoints: 500,
};

// ─── METADATA TEMPLATE ─────────────────────────────────────────────────

export interface GenesisNFTMetadata {
  name: string;
  description: string;
  image: string;
  external_url?: string;
  attributes: Array<{
    trait_type: string;
    value: string | number;
  }>;
  properties?: {
    creators?: Array<{
      address: string;
      share: number;
    }>;
    files?: Array<{
      uri: string;
      type: string;
    }>;
  };
}

// ─── RUNE ASSIGNMENTS (First 100 Cohort) ──────────────────────────────

export const SOVEREIGN_RUNES = [
  'ᚠ', // Fehu - Wealth
  'ᚢ', // Uruz - Strength
  'ᚦ', // Thurisaz - Gateway
  'ᚨ', // Ansuz - Signals
  'ᚱ', // Raido - Journey
  'ᚲ', // Kenaz - Torch
  'ᚳ', // Gebo - Gift
  'ᚴ', // Wunjo - Joy
  'ᚼ', // Hagalaz - Disruption
  'ᚾ', // Nauthiz - Need
  'ᛁ', // Isa - Stillness
  'ᛃ', // Jera - Harvest
  'ᛇ', // Eihwaz - Yew Tree
  'ᛈ', // Perthro - Mystery
  'ᛉ', // Algiz - Protection
  'ᛊ', // Sowilo - Sun
  'ᛏ', // Tiwaz - Warrior
  'ᛒ', // Berkano - Birch
  'ᛖ', // Ehwaz - Horse
  'ᛗ', // Mannaz - Humanity
  'ᛚ', // Laguz - Flow
  'ᛜ', // Ingwaz - Fertility
  'ᛝ', // Othala - Inheritance
  '◆', // Sovereign Diamond
  '✦', // Star of David
  '✧', // Sparkle
  '⟡', // Twelve Pointed Star
  '☩', // Cross Crosslet
  '❖', // Fleuron
  '◈', // White Diamond
] as const;

// ─── BLESSING COMPONENTS FOR LOCAL GENERATION ────────────────────────

// Blessing components combined deterministically per member
const BLESSING_PREFIXES = [
  'Bearer of',
  'Guardian of',
  'Architect of',
  'Keeper of',
  'Forger of',
  'Oracle of',
  'Shepherd of',
  'Sentinel of',
  'Navigator of',
  'Custodian of',
];

const BLESSING_QUALITIES = [
  'the First Frequency',
  'Capital Flow',
  'Sovereignty',
  'the Regime',
  'Wealth',
  'Markets',
  'Growth',
  'Systems',
  'Flows',
  'Knowledge',
];

const BLESSING_ASPECTS = [
  'Amplifier of Edge',
  'Protector of Capital',
  'Builder of Legacy',
  'Summoner of Abundance',
  'Alchemist of Assets',
  'Weaver of Discipline',
  'Holder of Frequency',
  'Transmitter of Wisdom',
  'Channeler of Opportunity',
  'Manifestor of Freedom',
  'Crystallizer of Gains',
  'Catalyst of Action',
  'Ambassador of Regime',
  'Pioneer of Sovereignty',
  'Champion of Capital',
  'Illuminator of Path',
  'Herald of Hyperion',
  'Seeker of Truth',
  'Defender of Systems',
  'Witness to the Regime',
];

// ─── GENESIS NFT METADATA GENERATOR ────────────────────────────────────

export function generateGenesisMetadata(
  memberNumber: number,
  memberRune: string,
  memberBlessing: string,
  isFoundingMember: boolean = memberNumber <= 100,
  mediaUri: string = 'https://abraxas-academy.vercel.app/assets/nft-preview.mp4'
): GenesisNFTMetadata {
  const cohortStatus = isFoundingMember ? 'Sovereign Few' : 'Genesis Member';
  const cohortNumber = isFoundingMember ? `First 100 - Member #${memberNumber}` : `Member #${memberNumber}`;

  return {
    name: `Abraxas Genesis ${cohortStatus}`,
    description: `${cohortStatus} of the Abraxas Sovereign Regime. Lifetime access to Academy, baseline ecosystem yields, and the path to capital formation. ${memberBlessing}.`,
    image: 'https://abraxas-academy.vercel.app/assets/nft-preview.mp4',
    external_url: 'https://abraxas-academy.vercel.app',
    attributes: [
      {
        trait_type: 'Cohort',
        value: cohortStatus,
      },
      {
        trait_type: 'Member Number',
        value: memberNumber,
      },
      {
        trait_type: 'Rune',
        value: memberRune,
      },
      {
        trait_type: 'Blessing',
        value: memberBlessing,
      },
      {
        trait_type: 'Status',
        value: 'Genesis',
      },
      {
        trait_type: 'Access Level',
        value: 'Academy + Yields',
      },
    ],
    properties: {
      creators: [
        {
          address: 'AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh', // Replace with actual authority
          share: 100,
        },
      ],
      files: [
        {
          uri: mediaUri,
          type: 'video/mp4',
        },
      ],
    },
  };
}

// ─── NFT CONSTANTS ────────────────────────────────────────────────────

export const GENESIS_NFT_CONFIG = {
  // Genesis Collection NFT (parent collection)
  // Set this after creating the collection NFT
  COLLECTION_MINT: process.env.VITE_COLLECTION_MINT || 'GENESIS_COLLECTION_MINT_ADDRESS',
  
  // Authority wallet (creator, signer)
  AUTHORITY_WALLET: process.env.VITE_CREATOR_WALLET || 'AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh',
  
  // NFT Storage
  MEDIA_URI: 'https://abraxas-academy.vercel.app/assets/nft-preview.mp4',
  METADATA_BASE_URI: 'ipfs://',
  
  // Minting Parameters
  PRICE: 0, // Free minting on devnet for testing
  MAX_SUPPLY: 100, // First cohort limited to 100
  
  // Traits Configuration
  TOTAL_RUNES: SOVEREIGN_RUNES.length,
  ALLOW_DUPLICATES: false, // Each member gets unique assignment
};

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────

/**
 * Get the rune for a given member number
 * Sequential assignment: Member 1 gets first rune, Member 2 gets second, etc.
 * Only 30 runes available for first 100 members
 */
export function getRuneForMember(memberNumber: number): string {
  if (memberNumber < 1 || memberNumber > 100) {
    return SOVEREIGN_RUNES[0]; // Fallback
  }
  // Map members 1-30 to runes 1-30, then repeat for 31-60, 61-90, 91-100
  const index = (memberNumber - 1) % SOVEREIGN_RUNES.length;
  return SOVEREIGN_RUNES[index];
}

/**
 * Generate a unique blessing for a member based on their number
 * Deterministic: same member number always gets the same blessing
 */
export function getBlessingForMember(memberNumber: number): string {
  // Create deterministic but unique blessing per member
  const prefixIndex = (memberNumber - 1) % BLESSING_PREFIXES.length;
  const qualityIndex = Math.floor((memberNumber - 1) / BLESSING_PREFIXES.length) % BLESSING_QUALITIES.length;
  const aspectIndex = (memberNumber - 1) % BLESSING_ASPECTS.length;
  
  // For members 1-10, use simple prefix + quality
  if (memberNumber <= 10) {
    return `${BLESSING_PREFIXES[prefixIndex]} ${BLESSING_QUALITIES[qualityIndex]}`;
  }
  
  // For members 11+, use the curated aspects for variety
  return BLESSING_ASPECTS[aspectIndex];
}

/**
 * Check if member number is in the Sovereign Few (First 100)
 */
export function isSovereignFew(memberNumber: number): boolean {
  return memberNumber >= 1 && memberNumber <= 100;
}

/**
 * Get member status display text
 */
export function getMemberStatusText(memberNumber: number): string {
  if (isSovereignFew(memberNumber)) {
    return `Sovereign Few - Member #${memberNumber}`;
  }
  return `Genesis Member - #${memberNumber}`;
}

/**
 * Verify NFT belongs to Genesis Collection
 * Checks if an NFT's collection matches our master collection
 */
export function isGenesisNFT(metadata: any, collectionMint?: string): boolean {
  const targetCollection = collectionMint || GENESIS_NFT_CONFIG.COLLECTION_MINT;
  
  // Check if metadata has collection reference
  if (metadata?.collection?.key === targetCollection) {
    return true;
  }
  
  // Check if NFT name indicates it's a Genesis NFT
  if (metadata?.name?.includes('Abraxas Genesis')) {
    return true;
  }
  
  // Check attributes
  if (metadata?.attributes?.some((attr: any) => attr.trait_type === 'Status' && attr.value === 'Genesis')) {
    return true;
  }
  
  return false;
}

/**
 * Validate member features
 */
export interface MemberFeatures {
  hasAcademy: boolean;
  hasBaselineYields: boolean;
  hasAbraxasID: boolean;
  hasCustomRune: boolean;
  hasBlessing: boolean;
  isSovereignFew: boolean;
  isCollectionMember: boolean;
  foundingMemberPerks: string[];
}

export function getMemberFeatures(memberNumber: number, isCollectionMember: boolean = true): MemberFeatures {
  const sovereign = isSovereignFew(memberNumber);
  
  return {
    hasAcademy: true,
    hasBaselineYields: true,
    hasAbraxasID: true,
    hasCustomRune: true,
    hasBlessing: true,
    isSovereignFew: sovereign,
    isCollectionMember,
    foundingMemberPerks: sovereign ? [
      'Founding Member status on ID card',
      'Higher baseline yield multiplier',
      'Priority access to IRL Miami events',
      'Early access to new asset classes',
      'Lifetime recognition as Original 100',
    ] : [],
  };
}

// ─── EXPORTS ──────────────────────────────────────────────────────────

export default {
  GENESIS_NFT_COLLECTION,
  GENESIS_NFT_CONFIG,
  SOVEREIGN_RUNES,
  generateGenesisMetadata,
  getRuneForMember,
  getBlessingForMember,
  isSovereignFew,
  isGenesisNFT,
  getMemberStatusText,
  getMemberFeatures,
};
