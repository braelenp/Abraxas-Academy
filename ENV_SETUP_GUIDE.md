# Environment Variables Setup Guide

## Overview

This guide explains how to configure environment variables for the Abraxas Academy NFT minting system.

---

## Variables by Category

### 🔌 Frontend Variables (Safe to expose - prefixed with `VITE_`)

These are visible to the browser and used for client-side operations.

#### `VITE_SOLANA_NETWORK`
- **Purpose**: Which Solana network to use
- **Values**: `devnet`, `testnet`, or `mainnet-beta`
- **Default**: `mainnet-beta` (production)
- **Example**: `VITE_SOLANA_NETWORK=mainnet-beta`

#### `VITE_SOLANA_RPC`
- **Purpose**: Solana RPC endpoint URL
- **Default**: `https://api.mainnet-beta.solana.com`
- **Example**: `VITE_SOLANA_RPC=https://api.mainnet-beta.solana.com`

#### `VITE_CANDY_MACHINE_ID`
- **Purpose**: Your Candy Machine's address (where NFTs are minted from)
- **How to get**: After creating Candy Machine, run: `metaplex candy-machine info`
- **Example**: `VITE_CANDY_MACHINE_ID=CndyV3LVqQo7G7Ks2A7bt3c2gEESDRjnMD2n1f2333Qc`

#### `VITE_COLLECTION_MINT`
- **Purpose**: Collection NFT mint address (parent collection)
- **How to get**: After creating Collection NFT: `metaplex nfts get <collection_address>`
- **Example**: `VITE_COLLECTION_MINT=5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA`

---

### 🔐 Backend Variables (Secret - DO NOT EXPOSE)

These run on the server only and should NEVER be committed to git.

#### `SOLANA_KEYPAIR`
- **Purpose**: Your wallet's secret key (what signs transactions)
- **⚠️ CRITICAL**: Never commit this to version control!
- **How to get**:
  ```bash
  # Export your Solana keypair as JSON array
  cat ~/.config/solana/id.json
  # You'll see: [1,45,230,...]
  ```
- **Example**: `SOLANA_KEYPAIR=[1,45,230,122,...]` (200+ numbers)
- **In Vercel**: Add as secret in Project Settings → Environment Variables

#### `SOLANA_NETWORK`
- **Purpose**: Network for backend operations
- **Values**: `devnet`, `testnet`, `mainnet-beta`
- **Example**: `SOLANA_NETWORK=mainnet-beta`

#### `CANDY_MACHINE_ID`
- **Purpose**: Backend reference to Candy Machine (same as frontend)
- **Example**: `CANDY_MACHINE_ID=CndyV3LVqQo7G7Ks2A7bt3c2gEESDRjnMD2n1f2333Qc`

#### `COLLECTION_MINT`
- **Purpose**: Backend reference to Collection NFT (same as frontend)
- **Example**: `COLLECTION_MINT=5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA`

---

### 💰 Mint Configuration

#### `MINT_PRICE`
- **Purpose**: Price per Genesis NFT in SOL
- **Example**: `MINT_PRICE=2` (2 SOL per NFT)
- **Note**: Users will pay this amount to mint

#### `CREATOR_WALLET`
- **Purpose**: Wallet address that receives SOL from mints
- **Usually**: Your Solana wallet address
- **Example**: `CREATOR_WALLET=5uxK9P9cmuaUPCigbQZt112UkkZHqXhWNYg8V3Ydu7mA`

---

### 📧 External Services

#### `RESEND_API_KEY`
- **Purpose**: Email service (already configured)
- **Status**: ✅ Already set in `.env.local`

---

## Setup Steps

### Step 1: Test Network (Devnet - Recommended First)

```bash
# Switch to devnet
solana config set --url devnet

# Get free devnet SOL
solana airdrop 2

# Update .env.local
VITE_SOLANA_NETWORK=devnet
VITE_SOLANA_RPC=https://api.devnet.solana.com
SOLANA_NETWORK=devnet
```

### Step 2: Create Collection NFT (Devnet)

```bash
# Create collection.json metadata file
cat > collection.json << 'EOF'
{
  "name": "Abraxas Genesis Collection",
  "symbol": "GENESIS",
  "description": "First 100 Sovereign Regime members",
  "image": "https://arweave.net/YOUR_IMAGE_URL",
  "external_url": "https://abraxas-academy.vercel.app"
}
EOF

# Create Collection NFT using Metaplex CLI
metaplex nfts create --keypair ~/.config/solana/id.json \
  --name "Abraxas Genesis Collection" \
  --symbol "GENESIS" \
  --uri file://./collection.json \
  --sellerFeeBasisPoints 500 \
  --isCollection
```

### Step 3: Create Candy Machine (Devnet)

```bash
# Create candy_machine config
cat > candy_machine_config.json << 'EOF'
{
  "symbol": "GENESIS",
  "sellers_fee_basis_points": 500,
  "isMutable": true,
  "type": "collection",
  "items_available": 100,
  "hidden_settings": null,
  "creators": [
    {
      "address": "YOUR_WALLET_ADDRESS",
      "share": 100,
      "verified": true
    }
  ]
}
EOF

# Create Candy Machine
metaplex candy-machine create \
  --keypair ~/.config/solana/id.json \
  --config candy_machine_config.json
```

### Step 4: Update .env.local

```bash
# Add your addresses
VITE_CANDY_MACHINE_ID=YOUR_CANDY_MACHINE_ADDRESS
VITE_COLLECTION_MINT=YOUR_COLLECTION_MINT_ADDRESS
CANDY_MACHINE_ID=YOUR_CANDY_MACHINE_ADDRESS
COLLECTION_MINT=YOUR_COLLECTION_MINT_ADDRESS
```

### Step 5: Test Minting

```bash
# Start the app
npm run dev:all

# Try minting in the UI
# Should see TX on https://explorer.solana.com/?cluster=devnet
```

### Step 6: Move to Mainnet

Once everything works on devnet:

1. Switch Solana CLI to mainnet: `solana config set --url mainnet-beta`
2. Get real SOL in your wallet
3. Create Collection NFT on mainnet
4. Create Candy Machine on mainnet
5. Update `.env.local` with mainnet addresses
6. Deploy to Vercel
7. Set Vercel env vars with mainnet addresses

---

## ✅ Verification Checklist

- [ ] `VITE_CANDY_MACHINE_ID` is set (non-empty)
- [ ] `VITE_COLLECTION_MINT` is set (non-empty)
- [ ] `SOLANA_KEYPAIR` is in `.env.local` locally (NOT in .env for Vercel)
- [ ] `MINT_PRICE` is set to desired price in SOL
- [ ] `CREATOR_WALLET` is set to your wallet
- [ ] `.env.local` is in `.gitignore` ✓
- [ ] `.env.example` is committed (for reference)

---

## 🚨 Security Reminders

1. **Never commit `SOLANA_KEYPAIR`** — It's your private key!
2. **Use `.env.local` for local development** — It's in .gitignore
3. **On Vercel**: Add vars in Project Settings → Environment Variables (not in code)
4. **Rotate keys** if you suspect compromise
5. **Use multisig** for production (advanced)

---

## Troubleshooting

### "Candy Machine not found"
- Check `VITE_CANDY_MACHINE_ID` is valid and created
- Verify it's on the correct network (devnet vs mainnet)

### "Cannot mint: insufficient funds"
- Check your wallet has SOL to pay mint price
- On devnet: request more airdrop

### "Invalid transaction"
- Verify `SOLANA_KEYPAIR` is correct
- Check RPC endpoint is responding
- Try fallback RPC in `.env.local`

---

## Next Steps

Once environment variables are configured:
→ Move to **Step 2: Implement `/api/nft/mint` Endpoint**
