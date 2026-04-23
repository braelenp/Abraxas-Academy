import { Connection, PublicKey } from '@solana/web3.js';
import { Metaplex } from '@metaplex-foundation/js';

/**
 * Server-side Metaplex Service for read-only operations
 * Fetch NFT metadata, collections, etc. without wallet connection
 */

let metaplexInstance: Metaplex | null = null;

/**
 * Initialize Metaplex instance (singleton pattern)
 */
function getMetaplexInstance(): Metaplex {
  if (!metaplexInstance) {
    const rpc = process.env.SOLANA_RPC_URL || 'https://api.devnet.solana.com';
    const connection = new Connection(rpc, 'confirmed');
    metaplexInstance = Metaplex.make(connection);
  }
  return metaplexInstance;
}

/**
 * Fetch NFTs owned by a wallet
 */
export async function fetchNFTsByWallet(walletAddress: string) {
  try {
    const metaplex = getMetaplexInstance();
    const owner = new PublicKey(walletAddress);

    const nfts = await metaplex.nfts().findAllByOwner({
      owner,
    });

    return {
      success: true,
      walletAddress,
      count: nfts.length,
      nfts: nfts.map((nft) => ({
        mint: (nft as any).mint?.address?.toString() || (nft as any).address?.toString(),
        name: nft.name,
        symbol: nft.symbol,
        uri: nft.uri,
        json: nft.json,
        attributes: (nft.json as any)?.attributes || [],
      })),
    };
  } catch (error) {
    console.error('Error fetching NFTs by wallet:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch NFTs',
    };
  }
}

/**
 * Fetch a specific NFT by mint address
 */
export async function fetchNFTByMint(mint: string) {
  try {
    const metaplex = getMetaplexInstance();
    const mintAddress = new PublicKey(mint);

    const nft = await metaplex.nfts().findByMint({ mintAddress });

    return {
      success: true,
      mint,
      data: {
        name: nft.name,
        symbol: nft.symbol,
        uri: nft.uri,
        json: nft.json,
        attributes: (nft.json as any)?.attributes || [],
        owner: (nft as any).owner?.toString?.() || (nft as any).token?.owner?.toString?.(),
        sellerFeeBasisPoints: (nft as any).sellerFeeBasisPoints,
        creators: (nft as any).creators || [],
      },
    };
  } catch (error) {
    console.error('Error fetching NFT by mint:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch NFT',
    };
  }
}

/**
 * Fetch Genesis NFTs only
 */
export async function fetchGenesisNFTsByWallet(walletAddress: string) {
  try {
    const metaplex = getMetaplexInstance();
    const owner = new PublicKey(walletAddress);

    const nfts = await metaplex.nfts().findAllByOwner({
      owner,
    });

    // Filter for Genesis NFTs
    const genesisNFTs = nfts.filter(
      (nft) =>
        nft.name.includes('Abraxas Genesis') ||
        (nft.json as any)?.attributes?.some?.(
          (attr: any) => attr.trait_type === 'Status' && attr.value === 'Genesis'
        )
    );

    return {
      success: true,
      walletAddress,
      count: genesisNFTs.length,
      nfts: genesisNFTs.map((nft) => {
        const json = nft.json as any;
        const attributes = json?.attributes || [];

        return {
          mint: (nft as any).mint?.address?.toString() || (nft as any).address?.toString(),
          name: nft.name,
          memberNumber: attributes.find((a: any) => a.trait_type === 'Member Number')?.value,
          rune: attributes.find((a: any) => a.trait_type === 'Rune')?.value,
          blessing: attributes.find((a: any) => a.trait_type === 'Blessing')?.value,
          status: attributes.find((a: any) => a.trait_type === 'Status')?.value,
          uri: nft.uri,
        };
      }),
    };
  } catch (error) {
    console.error('Error fetching Genesis NFTs:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch Genesis NFTs',
    };
  }
}
