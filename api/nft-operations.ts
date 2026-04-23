import express from 'express';
import { fetchNFTsByWallet, fetchNFTByMint, fetchGenesisNFTsByWallet } from './services/metaplexServerService';

/**
 * NFT Operations API Routes
 * Handles Metaplex NFT operations like minting, metadata updates, and fetching
 */

const router = express.Router();

/**
 * POST /api/nft/mint
 * Mint a new Genesis or La Casa NFT
 * NOTE: Minting is handled client-side via the Phantom wallet and useGenesisNFT hook
 * This endpoint is kept for documentation purposes and potential future admin-initiated minting
 */
router.post('/mint', async (req, res) => {
  try {
    // Minting should happen client-side for better security and UX
    res.status(400).json({
      error: 'Minting should be initiated client-side via the wallet adapter. Use the Join page to mint your Genesis NFT.',
      note: 'For admin-initiated minting, additional authentication and authorization is required.',
    });
  } catch (error) {
    console.error('NFT minting error:', error);
    res.status(500).json({ error: 'Failed to process minting request' });
  }
});

/**
 * GET /api/nft/collection/:walletAddress
 * Fetch all NFTs owned by a wallet
 * Query params: ?type=genesis (optional, filters to Genesis NFTs only)
 */
router.get('/collection/:walletAddress', async (req, res) => {
  try {
    const { walletAddress } = req.params;
    const { type } = req.query;

    if (!walletAddress) {
      return res.status(400).json({ error: 'Wallet address required' });
    }

    let result;

    if (type === 'genesis') {
      // Fetch Genesis NFTs only
      result = await fetchGenesisNFTsByWallet(walletAddress);
    } else {
      // Fetch all NFTs
      result = await fetchNFTsByWallet(walletAddress);
    }

    if (result.success) {
      return res.json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    console.error('NFT collection fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch NFT collection' });
  }
});

/**
 * GET /api/nft/:mint
 * Fetch metadata for a specific NFT by mint address
 */
router.get('/:mint', async (req, res) => {
  try {
    const { mint } = req.params;

    if (!mint) {
      return res.status(400).json({ error: 'Mint address required' });
    }

    const result = await fetchNFTByMint(mint);

    if (result.success) {
      return res.json(result);
    } else {
      return res.status(400).json(result);
    }
  } catch (error) {
    console.error('NFT metadata fetch error:', error);
    res.status(500).json({ error: 'Failed to fetch NFT metadata' });
  }
});

/**
 * POST /api/nft/update-metadata/:mint
 * Update NFT metadata (admin only - requires authorization)
 * NOTE: Metadata updates typically require the update authority keypair
 * This endpoint would need proper authentication/authorization in production
 */
router.post('/update-metadata/:mint', async (req, res) => {
  try {
    const { mint } = req.params;
    const { metadata, authorization } = req.body;

    if (!mint || !metadata) {
      return res.status(400).json({
        error: 'Missing required fields: mint, metadata',
      });
    }

    // TODO: Implement proper authentication/authorization
    // In production, verify the request is from an authorized admin

    res.status(501).json({
      error: 'Metadata updates require authorization. This endpoint is not yet implemented.',
      note: 'Metadata updates need the update authority keypair and proper security controls.',
    });
  } catch (error) {
    console.error('NFT metadata update error:', error);
    res.status(500).json({ error: 'Failed to update NFT metadata' });
  }
});

export default router;
