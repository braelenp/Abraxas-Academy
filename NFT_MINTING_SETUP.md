# NFT Minting Integration - Complete Setup Guide

## Overview

The Abraxas Academy NFT minting system uses **client-side minting** via the Phantom wallet and Metaplex SDK. This provides better security and UX compared to server-side minting.

### Architecture
- **Client-side**: React hooks (`useGenesisNFT`) that interface with Phantom
- **Blockchain**: Solana (devnet for testing, mainnet-beta for production)
- **NFT Framework**: Metaplex SDK for metadata and collection management
- **Server**: Read-only endpoints for querying NFT data (no minting on backend)

---

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Create Genesis Collection NFT
```bash
# This creates the parent collection that all member NFTs link to
npx ts-node scripts/createGenesisCollection.ts
```

**Output:**
```
Collection Mint Address: 5uxK9P9cmuaUPCigb...
📋 Add this to your .env.local:
VITE_COLLECTION_MINT=5uxK9P9cmuaUPCigb...
VITE_CREATOR_WALLET=YOUR_WALLET_ADDRESS
```

### 3. Update `.env.local`
```bash
# Add the values from the script output
VITE_COLLECTION_MINT=<collection_mint_address>
VITE_CREATOR_WALLET=<your_wallet_address>
```

### 4. Start Development Server
```bash
npm run dev:all
# Frontend: http://localhost:5173
# API: http://localhost:3001
```

### 5. Test NFT Minting
1. Connect Phantom wallet
2. Go to "Join" page (`/app/join`)
3. Click "Buy Genesis NFT"
4. Approve transaction in Phantom
5. See "Forging..." status, then success
6. View NFT on `/app/nfts` page

---

## Environment Variables Reference

### Frontend Variables (`.env.local` - Client-side)

All frontend variables are **safe to expose** and will be bundled in the browser.

| Variable | Required | Purpose | Example |
|----------|----------|---------|---------|
| `VITE_SOLANA_NETWORK` | Yes | Network (devnet/mainnet-beta) | `devnet` |
| `VITE_SOLANA_RPC` | Yes | Solana RPC endpoint | `https://api.devnet.solana.com` |
| `VITE_COLLECTION_MINT` | **Yes** | Parent collection NFT mint | `5uxK9P...` |
| `VITE_CREATOR_WALLET` | Yes | Creator/authority wallet | `AC3yGEL...` |

### Backend Variables (`.env.local` - Server-side only)

| Variable | Required | Purpose | Example |
|----------|----------|---------|---------|
| `SOLANA_RPC_URL` | No | Backend RPC (read-only) | `https://api.devnet.solana.com` |
| `SOLANA_NETWORK` | No | Backend network | `devnet` |

### Service Variables (Already Configured)

| Variable | Purpose | Current Value |
|----------|---------|----------------|
| `RESEND_API_KEY` | Email service | `re_R1uorxkX_...` ✓ |

---

## Step-by-Step Setup

### Step 1: Configure Network & RPC

**Option A: Devnet (Recommended for testing)**
```env
# .env.local
VITE_SOLANA_NETWORK=devnet
VITE_SOLANA_RPC=https://api.devnet.solana.com
SOLANA_NETWORK=devnet
```

**Option B: Mainnet Beta (Production)**
```env
# .env.local
VITE_SOLANA_NETWORK=mainnet-beta
VITE_SOLANA_RPC=https://api.mainnet-beta.solana.com
SOLANA_NETWORK=mainnet-beta
```

### Step 2: Create Genesis Collection

The collection NFT is the parent container that groups all member Genesis NFTs.

```bash
# Prerequisites:
# 1. Solana CLI installed: sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
# 2. Keypair set up: solana-keygen new (or use existing)
# 3. On devnet, fund with airdrop: solana airdrop 2 --url devnet

# Run collection creation script
npx ts-node scripts/createGenesisCollection.ts

# Example output:
# ✨ Genesis Collection Created! ✨
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Collection Mint Address: 5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA
# Transaction: 3vL2JF5k...
# Owner: AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh
```

**What it does:**
- Creates metadata JSON file for the collection
- Uploads metadata to Arweave (via Metaplex)
- Creates collection NFT on-chain
- Saves configuration to `.collection-config.json`

### Step 3: Add Collection Address to .env.local

```bash
# Copy from script output
VITE_COLLECTION_MINT=5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA
VITE_CREATOR_WALLET=AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh
```

### Step 4: Start Development

```bash
# Terminal 1: Frontend (Vite + React)
npm run dev

# Terminal 2: Backend API (Express)
npm run dev:server

# Access:
# Frontend: http://localhost:5173
# API: http://localhost:3001
```

### Step 5: Test Minting Flow

1. **Connect Wallet**
   - Open app, click wallet icon
   - Select Phantom
   - Approve connection

2. **View Join Page**
   - Navigate to `/app/join`
   - See Genesis NFT information
   - Button shows "Buy Genesis NFT"

3. **Mint NFT**
   - Click "Buy Genesis NFT"
   - Status shows "Forging Membership..."
   - Phantom prompts for tx approval
   - Approve transaction

4. **View Success**
   - Card shows "NFT Verified"
   - Mint address displayed
   - Can view with member rune and blessing

5. **View on NFT Page**
   - Go to `/app/nfts`
   - See Genesis NFT card with all details
   - Can view member number, rune, blessing

### Step 6: Verify on Blockchain

```bash
# View collection on Solana Explorer
https://explorer.solana.com/address/5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA?cluster=devnet

# View minted NFT
https://explorer.solana.com/address/<NFT_MINT_ADDRESS>?cluster=devnet
```

---

## NFT Data Model

### Member Genesis NFT

Each minted NFT includes:

```json
{
  "name": "Abraxas Genesis Sovereign Few",
  "description": "Founding member of Abraxas Sovereign Regime...",
  "image": "https://abraxas-academy.vercel.app/assets/nft-preview.mp4",
  "attributes": [
    { "trait_type": "Member Number", "value": 1 },
    { "trait_type": "Rune", "value": "ᚠ" },
    { "trait_type": "Blessing", "value": "Bearer of the First Frequency" },
    { "trait_type": "Status", "value": "Genesis" },
    { "trait_type": "Cohort", "value": "Sovereign Few" },
    { "trait_type": "Access Level", "value": "Academy + Yields" }
  ]
}
```

### Rune System
- **30 Elder Futhark Runes** assigned sequentially
- Members 1-100 get runes from the set
- Each rune has symbolic meaning (wealth, strength, etc.)

### Blessing System
- **Deterministic generation** based on member number
- Members 1-10: Simple prefix + quality
- Members 11+: Curated spiritual blessings
- Examples:
  - "Guardian of Capital Flow"
  - "Architect of Sovereignty"
  - "Illuminator of Path"

---

## API Endpoints

### Query NFT Data (Server-side Read-only)

**GET** `/api/nft/:mint`
```bash
# Fetch specific NFT metadata
curl http://localhost:3001/api/nft/5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA

# Response:
{
  "success": true,
  "mint": "5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA",
  "data": {
    "name": "Abraxas Genesis Sovereign Few",
    "memberNumber": 1,
    "rune": "ᚠ",
    "blessing": "Bearer of the First Frequency",
    "attributes": [...]
  }
}
```

**GET** `/api/nft/collection/:walletAddress`
```bash
# List all NFTs owned by wallet
curl http://localhost:3001/api/nft/collection/AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh

# Response:
{
  "success": true,
  "walletAddress": "AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh",
  "count": 1,
  "nfts": [...]
}
```

**GET** `/api/nft/collection/:walletAddress?type=genesis`
```bash
# List only Genesis NFTs (filters by type)
curl http://localhost:3001/api/nft/collection/AC3yGEL7UfwRmVWJcXuKQYT1sJUJwgEL9FGQ2cjb9qKh?type=genesis
```

---

## Client-Side Integration

### React Hook: `useGenesisNFT`

```tsx
import { useGenesisNFT } from '@/hooks/useGenesisNFT';

export function MyComponent() {
  const {
    // State
    genesisNFT,           // Full NFT data
    hasGenesisNFT,        // Boolean
    memberNumber,         // Number or null
    memberRune,           // String or null
    memberBlessing,       // String or null
    
    // Loading
    isLoading,            // Fetching NFT data
    isMinting,            // While minting
    
    // Actions
    mintGenesisNFT,       // () => Promise<MintResult>
    refetch,              // () => Promise<void>
    clear,                // () => void
    
    // Error handling
    error,                // String or null
  } = useGenesisNFT();

  // Example: Mint on button click
  const handleMint = async () => {
    const result = await mintGenesisNFT();
    if (result.success) {
      console.log('Minted:', result.mint);
    } else {
      console.error('Error:', result.error);
    }
  };

  return (
    <>
      {hasGenesisNFT ? (
        <p>You own Genesis NFT #{memberNumber}</p>
      ) : (
        <button onClick={handleMint} disabled={isMinting}>
          {isMinting ? 'Minting...' : 'Mint Genesis NFT'}
        </button>
      )}
    </>
  );
}
```

### Type Definitions

```typescript
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
```

---

## Production Deployment

### 1. Move to Mainnet

```bash
# Update .env.local
VITE_SOLANA_NETWORK=mainnet-beta
VITE_SOLANA_RPC=https://api.mainnet-beta.solana.com
SOLANA_NETWORK=mainnet-beta

# Create new collection on mainnet
# (Devnet collections won't work on mainnet)
npx ts-node scripts/createGenesisCollection.ts

# Update VITE_COLLECTION_MINT and VITE_CREATOR_WALLET
```

### 2. Deploy to Vercel

```bash
git push   # This triggers Vercel deployment
```

### 3. Set Vercel Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables:

```
VITE_SOLANA_NETWORK=mainnet-beta
VITE_SOLANA_RPC=https://api.mainnet-beta.solana.com
VITE_COLLECTION_MINT=<your_mainnet_collection>
VITE_CREATOR_WALLET=<your_wallet>
RESEND_API_KEY=re_R1uorxkX_...
```

### 4. Verify Production

```bash
https://abraxas-academy.vercel.app/app/join
# Test minting with real SOL
# Verify NFTs on https://explorer.solana.com
```

---

## Troubleshooting

### "Phantom not found"
- Install Phantom: https://phantom.app
- Refresh page after installation

### "Network RPC error"
- Check `VITE_SOLANA_RPC` is correct
- Try alternative RPC endpoint
- Devnet: `https://api.devnet.solana.com`
- Mainnet: `https://api.mainnet-beta.solana.com`

### "Collection not found"
- Run `scripts/createGenesisCollection.ts` again
- Verify `VITE_COLLECTION_MINT` matches script output
- Check Explorer to confirm collection exists

### "Insufficient SOL balance"
- **Devnet**: Request airdrop: `solana airdrop 2 --url devnet`
- **Mainnet**: Purchase SOL from exchange

### "Transaction failed"
- Check wallet balance
- Verify network is correct (devnet vs mainnet)
- Retry with fresh connection

---

## File Structure

```
├── scripts/
│   └── createGenesisCollection.ts     # Create parent collection
├── src/
│   ├── services/
│   │   └── metaplexService.ts         # Client-side NFT operations
│   ├── hooks/
│   │   └── useGenesisNFT.ts           # React hook for minting
│   ├── providers/
│   │   ├── MetaplexProvider.tsx       # Metaplex context
│   │   └── MembershipProvider.tsx     # Membership state
│   └── pages/
│       ├── JoinPage.tsx               # Minting UI
│       └── NFTPage.tsx                # View owned NFTs
├── api/
│   └── services/
│       └── metaplexServerService.ts   # Server-side read operations
├── .env.local                         # Environment variables
└── NFT_MINTING_SETUP.md              # This file
```

---

## Next Steps

✅ **Genesis NFT Minting**: COMPLETE
- Client-side minting via Phantom
- Member runes and blessings
- Collection linking

🔄 **Future Enhancements**:
- [ ] La Casa Collection (secondary NFTs)
- [ ] NFT marketplace integration
- [ ] Admin dashboard for stats
- [ ] Verified holders list on-chain

---

## Support & Resources

- **Solana Docs**: https://docs.solana.com
- **Metaplex SDK**: https://developers.metaplex.com
- **Phantom Wallet**: https://phantom.app
- **Solana Explorer**: https://explorer.solana.com
- **Abraxas Academy**: https://abraxas-academy.vercel.app
