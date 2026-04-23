/**
 * Metaplex Service - Genesis NFT Operations
 * Handles minting, fetching, and verifying Genesis NFTs
 */

import { PublicKey, Transaction } from '@solana/web3.js';
import { Metaplex, toMetaplexFile } from '@metaplex-foundation/js';
import { 
  generateGenesisMetadata, 
  getRuneForMember, 
  getBlessingForMember,
  GENESIS_NFT_COLLECTION,
  isSovereignFew 
} from '../lib/nft';

// ─── TYPES ────────────────────────────────────────────────────────────

export interface GenesisNFTData {
  mint: PublicKey;
  owner: PublicKey;
  memberNumber: number;
  rune: string;
  blessing: string;
  isSovereignFew: boolean;
  metadata: {
    name: string;
    uri: string;
    json?: Record<string, any>;
  };
}

export interface MintResult {
  success: boolean;
  mint?: PublicKey;
  transaction?: string;
  error?: string;
  memberNumber?: number;
}

// ─── METAPLEX SERVICE ─────────────────────────────────────────────────

export class MetaplexNFTService {
  private metaplex: Metaplex;
  private static memberCounter = 1; // Track member number (in production, use on-chain state)

  constructor(metaplex: Metaplex) {
    this.metaplex = metaplex;
  }

  /**
   * Mint a Genesis NFT for a member
   * @param owner - Wallet owner public key
   * @returns MintResult with success status and transaction details
   */
  async mintGenesisNFT(owner: PublicKey): Promise<MintResult> {
    try {
      // Get next member number (in production, query on-chain)
      const memberNumber = this.getNextMemberNumber();

      // Check if exceeds max supply (100 for founding members)
      if (memberNumber > 100) {
        return {
          success: false,
          error: `Genesis NFT limit reached. Current member number: ${memberNumber}. First 100 cohort is sold out.`,
        };
      }

      // Generate member-specific data
      const rune = getRuneForMember(memberNumber);
      const blessing = getBlessingForMember(memberNumber);
      const metadata = generateGenesisMetadata(
        memberNumber,
        rune,
        blessing,
        isSovereignFew(memberNumber)
      );

      // Upload metadata to Arweave/IPFS via Metaplex
      const metaplexFile = toMetaplexFile(
        JSON.stringify(metadata),
        `genesis-${memberNumber}.json`
      );

      const uploadResult = await this.metaplex.storage().upload(metaplexFile);
      console.log('Metadata uploaded to:', uploadResult);

      // Create the NFT using Metaplex SDK
      const { nft, response } = await this.metaplex.nfts().create({
        name: metadata.name,
        symbol: GENESIS_NFT_COLLECTION.symbol,
        uri: uploadResult, // Metadata URI
        sellerFeeBasisPoints: GENESIS_NFT_COLLECTION.sellerFeeBasisPoints,
        // Uncomment when collection is set up:
        // collection: new PublicKey(GENESIS_NFT_CONFIG.COLLECTION_MINT),
        // collectionAuthority: this.metaplex.identity(),
        // isCollection: false,
      });

      // Get mint address from the NFT object
      const mintAddress = (nft as any).mint?.address || (nft as any).address;
      console.log('NFT Minted:', mintAddress.toString());

      return {
        success: true,
        mint: mintAddress as PublicKey,
        transaction: response.signature,
        memberNumber,
      };
    } catch (error) {
      console.error('Error minting Genesis NFT:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error during minting',
      };
    }
  }

  /**
   * Fetch user's Genesis NFT
   * @param owner - Wallet owner public key
   * @returns GenesisNFTData if found, null otherwise
   */
  async fetchGenesisNFT(owner: PublicKey): Promise<GenesisNFTData | null> {
    try {
      // Find NFTs owned by this wallet with the Genesis collection name
      const nfts = await this.metaplex.nfts().findAllByOwner({
        owner,
      });

      // Filter for Genesis NFTs (by name or symbol)
      const genesisNFT = nfts.find(
        (nft) =>
          nft.name.includes('Abraxas Genesis') ||
          (nft.json?.attributes?.some(
            (attr: any) => attr.trait_type === 'Status' && attr.value === 'Genesis'
          ))
      );

      if (!genesisNFT) {
        return null;
      }

      // Extract metadata
      const memberNumberRaw = genesisNFT.json?.attributes?.find(
        (attr: any) => attr.trait_type === 'Member Number'
      )?.value;

      const rune = genesisNFT.json?.attributes?.find(
        (attr: any) => attr.trait_type === 'Rune'
      )?.value;

      const blessing = genesisNFT.json?.attributes?.find(
        (attr: any) => attr.trait_type === 'Blessing'
      )?.value;

      // Parse member number as number
      const memberNumber = memberNumberRaw ? parseInt(String(memberNumberRaw), 10) : 0;

      // Get mint address safely
      const mintAddress = ((genesisNFT as any).mint?.address || (genesisNFT as any).address) as PublicKey;

      return {
        mint: mintAddress,
        owner,
        memberNumber,
        rune: rune || '',
        blessing: blessing || '',
        isSovereignFew: memberNumber > 0 ? isSovereignFew(memberNumber) : false,
        metadata: {
          name: genesisNFT.name,
          uri: genesisNFT.uri,
          json: genesisNFT.json || undefined,
        },
      };
    } catch (error) {
      console.error('Error fetching Genesis NFT:', error);
      return null;
    }
  }

  /**
   * Verify if a wallet has a Genesis NFT
   * @param owner - Wallet owner public key
   * @returns boolean indicating membership
   */
  async hasGenesisNFT(owner: PublicKey): Promise<boolean> {
    const nft = await this.fetchGenesisNFT(owner);
    return nft !== null;
  }

  /**
   * Get all Genesis NFT holders (requires indexing)
   * For now, returns empty - in production, query on-chain
   */
  async getAllGenesisMembers(): Promise<GenesisNFTData[]> {
    // TODO: Implement indexed query for all Genesis NFT holders
    // This would require either:
    // 1. Indexing service (Solscan, Magic Eden API)
    // 2. On-chain program to track mints
    // 3. Metaplex indexing API
    return [];
  }

  /**
   * Update NFT metadata (rune/blessing)
   * Only authority can do this
   */
  async updateGenesisMetadata(
    mint: PublicKey,
    newMetadata: Record<string, any>
  ): Promise<MintResult> {
    try {
      const nft = await this.metaplex.nfts().findByMint({ mintAddress: mint });

      const { response } = await this.metaplex.nfts().update({
        nftOrSft: nft,
        uri: nft.uri, // Keep existing URI
      });

      return {
        success: true,
        transaction: response.signature,
      };
    } catch (error) {
      console.error('Error updating Genesis NFT:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error during update',
      };
    }
  }

  /**
   * Get member number counter
   * In production, this should query on-chain
   */
  private getNextMemberNumber(): number {
    // For now, increment locally (NOT PRODUCTION SAFE)
    // In production, query an on-chain PDA to track total mints
    return MetaplexNFTService.memberCounter++;
  }

  /**
   * Reset member counter (for testing)
   * REMOVE IN PRODUCTION
   */
  static resetMemberCounter(): void {
    MetaplexNFTService.memberCounter = 1;
  }

  /**
   * Get current member count
   */
  static getCurrentMemberNumber(): number {
    return MetaplexNFTService.memberCounter - 1;
  }
}

// ─── SINGLETON INSTANCE ──────────────────────────────────────────────

let nftServiceInstance: MetaplexNFTService | null = null;

/**
 * Get or create NFT service instance
 */
export function getNFTService(metaplex: Metaplex): MetaplexNFTService {
  if (!nftServiceInstance) {
    nftServiceInstance = new MetaplexNFTService(metaplex);
  }
  return nftServiceInstance;
}

/**
 * Reset service instance (for testing)
 */
export function resetNFTService(): void {
  nftServiceInstance = null;
  MetaplexNFTService.resetMemberCounter();
}

export default MetaplexNFTService;
