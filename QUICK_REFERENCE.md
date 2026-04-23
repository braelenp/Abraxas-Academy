# NFT Minting Quick Reference

## 🚀 One-Line Setup
```bash
npx ts-node scripts/createGenesisCollection.ts && npm run dev:all
```

## Table of Contents
- [Quick Start](#quick-start)
- [Files Changed](#files-changed)
- [Key Concepts](#key-concepts)
- [Implementation Details](#implementation-details)

---

## Quick Start

### 1. Create Collection (One-time)
```bash
npx ts-node scripts/createGenesisCollection.ts
```
Copies the mint address and add to `.env.local`:
```env
VITE_COLLECTION_MINT=<address>
VITE_CREATOR_WALLET=<address>
```

### 2. Start Development
```bash
npm run dev:all
# Frontend: http://localhost:5173
# API: http://localhost:3001
```

### 3. Test Minting
1. Open http://localhost:5173/app/join
2. Connect Phantom wallet
3. Click "Buy Genesis NFT"
4. Approve transaction
5. See success status and mint address

---

## Files Changed / Created

### New Files
- `NFT_MINTING_SETUP.md` - Comprehensive integration guide
- `QUICK_REFERENCE.md` - This file (developer quick reference)

### Key Implementation Files
- `src/services/metaplexService.ts` - Client-side NFT minting
- `src/hooks/useGenesisNFT.ts` - React hook for minting
- `src/providers/MetaplexProvider.tsx` - Metaplex context
- `src/pages/JoinPage.tsx` - Minting UI
- `src/pages/NFTPage.tsx` - View NFTs
- `api/nft-operations.ts` - API routes
- `api/services/metaplexServerService.ts` - Server read operations
- `scripts/createGenesisCollection.ts` - Collection creation

### Modified Files
- `.env.local` - Added VITE_COLLECTION_MINT, VITE_CREATOR_WALLET
- `.env.example` - Updated for clarity
- `.gitignore` - Added .collection-config.json

---

## Key Concepts

### Architecture
- **Client-side minting**: User signs transaction via Phantom
- **Metaplex SDK**: Handles NFT creation and metadata
- **Collection NFT**: Parent container that groups all Genesis NFTs
- **Server-side**: Read-only endpoints for querying NFT data

### Member Data
- **Member Number**: Sequential 1-100 for First 100 cohort
- **Rune**: One of 30 Elder Futhark runes, assigned sequentially
- **Blessing**: Unique spiritual blessing generated per member
- **Status**: "Genesis" for all member NFTs

### Collection Structure
```
Genesis Collection NFT (Parent)
├── Member #1 NFT (Rune: ᚠ)
├── Member #2 NFT (Rune: ᚢ)
├── Member #3 NFT (Rune: ᚦ)
└── ...up to 100 members
```

---

## Implementation Details

### How Minting Works

1. **User initiates mint** via JoinPage
2. **useGenesisNFT hook** calls `mintGenesisNFT()`
3. **MetaplexNFTService** generates member data:
   - Next member number (1, 2, 3, ...)
   - Member rune from SOVEREIGN_RUNES array
   - Unique blessing based on member number
4. **Metadata is created** with all attributes
5. **Metaplex uploads** to Arweave (bundled storage)
6. **NFT created** on-chain via Phantom signature
7. **Collection linked** - NFT added to Genesis Collection
8. **MembershipProvider** detects NFT, updates state
9. **UI reflects** member status

### Data Flow
```
JoinPage
  ↓
useMembership().activateMembership()
  ↓
useGenesisNFT().mintGenesisNFT()
  ↓
MetaplexNFTService.mintGenesisNFT()
  ↓
Metaplex SDK
  ↓
Phantom Wallet (User approves)
  ↓
Transaction signed and broadcast
  ↓
NFT minted on Solana blockchain
  ↓
MembershipProvider detects via useGenesisNFT
  ↓
UI updates, shows member info
```

### API Endpoints

#### GET /api/nft/:mint
Fetch NFT metadata by mint address
```bash
curl http://localhost:3001/api/nft/5uxK9P9...
```

#### GET /api/nft/collection/:walletAddress
List all NFTs owned by wallet
```bash
curl http://localhost:3001/api/nft/collection/AC3yGEL...
```

#### GET /api/nft/collection/:walletAddress?type=genesis
List only Genesis NFTs
```bash
curl http://localhost:3001/api/nft/collection/AC3yGEL...?type=genesis
```

---

## Environment Variables

### Required
```env
VITE_SOLANA_NETWORK=devnet           # or mainnet-beta
VITE_SOLANA_RPC=https://api...       # RPC endpoint
VITE_COLLECTION_MINT=5uxK9P9...      # From collection script
VITE_CREATOR_WALLET=AC3yGEL...       # Creator address
```

### Optional
```env
SOLANA_RPC_URL=https://api...        # Server-side RPC
SOLANA_NETWORK=devnet                # Server network
RESEND_API_KEY=re_...                # Email service
```

---

## Troubleshooting

### Build issues
```bash
npm install && npm run build
```

### Collection not found
```bash
# Recreate collection
npx ts-node scripts/createGenesisCollection.ts

# Copy addresses to .env.local
```

### Phantom not connecting
- Install Phantom: https://phantom.app
- Make sure network matches (devnet/mainnet)
- Try: `solana config get` to check local network

### Transaction failed
- Check wallet has SOL balance (≥0.01 SOL)
- Verify network is correct
- Check RPC endpoint is responsive

---

## Testing Checklist

- [ ] Build passes: `npm run build`
- [ ] Frontend starts: `npm run dev`
- [ ] API server starts: `npm run dev:server`
- [ ] Can create collection: `npx ts-node scripts/createGenesisCollection.ts`
- [ ] .env.local has VITE_COLLECTION_MINT
- [ ] Can connect Phantom wallet
- [ ] Can mint NFT on /app/join
- [ ] NFT shows on /app/nfts
- [ ] Member rune displays correctly
- [ ] Member blessing displays correctly
- [ ] Mint address visible in explorer
- [ ] API endpoints respond correctly

---

## Further Reading

- **NFT_MINTING_SETUP.md** - Full comprehensive guide
- **Solana Docs**: https://docs.solana.com
- **Metaplex SDK**: https://developers.metaplex.com
- **Phantom Docs**: https://docs.phantom.app
