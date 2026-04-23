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

// ─── BLESSINGS FOR FIRST 100 ──────────────────────────────────────────

export const SOVEREIGN_BLESSINGS = [
  'Bearer of the First Frequency',
  'Guardian of Capital Flow',
  'Architect of Sovereignty',
  'Keeper of the Regime',
  'Forger of Wealth',
  'Oracle of Markets',
  'Shepherd of Growth',
  'Sentinel of Systems',
  'Navigator of Flows',
  'Custodian of Knowledge',
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
  imageUri: string = 'https://abraxas-academy.vercel.app/assets/genesis-nft.png'
): GenesisNFTMetadata {
  const cohortStatus = isFoundingMember ? 'Sovereign Few' : 'Genesis Member';
  const cohortNumber = isFoundingMember ? `First 100 - Member #${memberNumber}` : `Member #${memberNumber}`;

  return {
    name: `Abraxas Genesis ${cohortStatus}`,
    description: `${cohortStatus} of the Abraxas Sovereign Regime. Lifetime access to Academy, baseline ecosystem yields, and the path to capital formation. ${memberBlessing}.`,
    image: imageUri,
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
          uri: imageUri,
          type: 'image/png',
        },
      ],
    },
  };
}

// ─── NFT CONSTANTS ────────────────────────────────────────────────────

export const GENESIS_NFT_CONFIG = {
  // Update this to the actual Metaplex Candy Machine or collection ID
  COLLECTION_MINT: 'GENESIS_COLLECTION_MINT_ADDRESS', // To be set
  
  // Update to the actual authority wallet
  AUTHORITY_WALLET: 'AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh',
  
  // NFT Storage
  IMAGE_BASE_URI: 'https://abraxas-academy.vercel.app/assets/',
  METADATA_BASE_URI: 'ipfs://', // Will be updated after upload
  
  // Minting Parameters
  PRICE: 100_000_000, // Price in lamports (0 for free, adjust as needed)
  MAX_SUPPLY: 100, // First cohort limited to 100
  
  // Traits Configuration
  TOTAL_RUNES: SOVEREIGN_RUNES.length,
  TOTAL_BLESSINGS: SOVEREIGN_BLESSINGS.length,
};

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────

/**
 * Get the rune for a given member number
 * Cycles through runes for first 100 members
 */
export function getRuneForMember(memberNumber: number): string {
  const index = (memberNumber - 1) % SOVEREIGN_RUNES.length;
  return SOVEREIGN_RUNES[index];
}

/**
 * Get the blessing for a given member number
 * Cycles through blessings for first 100 members
 */
export function getBlessingForMember(memberNumber: number): string {
  const index = (memberNumber - 1) % SOVEREIGN_BLESSINGS.length;
  return SOVEREIGN_BLESSINGS[index];
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
 * Validate member features
 */
export interface MemberFeatures {
  hasAcademy: boolean;
  hasBaselineYields: boolean;
  hasAbraxasID: boolean;
  hasCustomRune: boolean;
  hasBlessing: boolean;
  isSovereignFew: boolean;
  foundingMemberPerks: string[];
}

export function getMemberFeatures(memberNumber: number): MemberFeatures {
  const sovereign = isSovereignFew(memberNumber);
  
  return {
    hasAcademy: true,
    hasBaselineYields: true,
    hasAbraxasID: true,
    hasCustomRune: true,
    hasBlessing: true,
    isSovereignFew: sovereign,
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
  SOVEREIGN_BLESSINGS,
  generateGenesisMetadata,
  getRuneForMember,
  getBlessingForMember,
  isSovereignFew,
  getMemberStatusText,
  getMemberFeatures,
};
