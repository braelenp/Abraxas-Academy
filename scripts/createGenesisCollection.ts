/**
 * Create Genesis Collection NFT
 * This script creates a parent collection NFT that all Genesis members link to
 * Run this once: npx ts-node scripts/createGenesisCollection.ts
 */

import { Connection, Keypair, PublicKey } from '@solana/web3.js';
import { Metaplex, toMetaplexFile } from '@metaplex-foundation/js';
import * as fs from 'fs';

// Configuration
const RPC_URL = process.env.VITE_SOLANA_RPC || 'https://api.devnet.solana.com';
const KEYPAIR_PATH = process.env.SOLANA_KEYPAIR_PATH || `${process.env.HOME}/.config/solana/id.json`;

// Collection metadata
const COLLECTION_NAME = 'Abraxas Genesis';
const COLLECTION_SYMBOL = 'ABRA-GEN';
const COLLECTION_DESCRIPTION = 'The Genesis collection of the Abraxas Sovereign Regime. 100 founding members with lifetime Academy access, baseline yields, and the path to capital formation.';
const COLLECTION_IMAGE = 'https://abraxas-academy.vercel.app/assets/nft-preview.mp4';

async function createGenesisCollection() {
  console.log('🚀 Creating Genesis Collection NFT...\n');

  // Load keypair
  if (!fs.existsSync(KEYPAIR_PATH)) {
    console.error(`❌ Keypair not found at ${KEYPAIR_PATH}`);
    console.error('Create one with: solana-keygen new -o ~/.config/solana/id.json --no-passphrase');
    process.exit(1);
  }

  const keypairData = JSON.parse(fs.readFileSync(KEYPAIR_PATH, 'utf-8'));
  const keypair = Keypair.fromSecretKey(new Uint8Array(keypairData));

  console.log(`📍 Using keypair: ${keypair.publicKey.toBase58()}`);
  console.log(`🌐 RPC URL: ${RPC_URL}\n`);

  // Initialize Metaplex
  const connection = new Connection(RPC_URL, 'confirmed');
  const metaplex = new Metaplex(connection);
  metaplex.use({
    install(metaplex) {
      metaplex.identity().setDriver({} as any);
    },
  });
  metaplex.identity().setDriver({ keypair } as any);

  try {
    // Create collection metadata
    const collectionMetadata = {
      name: COLLECTION_NAME,
      description: COLLECTION_DESCRIPTION,
      image: COLLECTION_IMAGE,
      external_url: 'https://abraxas-academy.vercel.app',
      attributes: [
        {
          trait_type: 'Type',
          value: 'Genesis Collection',
        },
        {
          trait_type: 'Max Supply',
          value: '100',
        },
        {
          trait_type: 'Status',
          value: 'Active',
        },
      ],
      properties: {
        creators: [
          {
            address: keypair.publicKey.toBase58(),
            share: 100,
          },
        ],
        files: [
          {
            uri: COLLECTION_IMAGE,
            type: 'video/mp4',
          },
        ],
      },
    };

    console.log('📝 Uploading collection metadata to Arweave...');
    const metaplexFile = toMetaplexFile(
      JSON.stringify(collectionMetadata),
      'genesis-collection.json'
    );
    const uploadResult = await metaplex.storage().upload(metaplexFile);
    console.log(`✅ Metadata uploaded: ${uploadResult}\n`);

    // Create collection NFT
    console.log('🔄 Creating collection NFT on-chain...');
    const { nft, response } = await metaplex.nfts().create({
      name: COLLECTION_NAME,
      symbol: COLLECTION_SYMBOL,
      uri: uploadResult,
      sellerFeeBasisPoints: 500, // 5% royalties
      isCollection: true, // Mark as collection
    });

    const collectionMint = (nft as any).mint?.address || (nft as any).address;

    console.log('\n✨ Genesis Collection Created! ✨\n');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`Collection Mint Address: ${collectionMint.toBase58()}`);
    console.log(`Transaction: ${response.signature}`);
    console.log(`Owner: ${keypair.publicKey.toBase58()}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Output configuration
    console.log('📋 Add this to your .env.local:\n');
    console.log(`VITE_COLLECTION_MINT=${collectionMint.toBase58()}`);
    console.log(`VITE_CREATOR_WALLET=${keypair.publicKey.toBase58()}`);
    console.log(`COLLECTION_MINT=${collectionMint.toBase58()}\n`);

    // Save to config file
    const configPath = '.collection-config.json';
    fs.writeFileSync(
      configPath,
      JSON.stringify(
        {
          collectionMint: collectionMint.toBase58(),
          creatorWallet: keypair.publicKey.toBase58(),
          transactionSignature: response.signature,
          createdAt: new Date().toISOString(),
          network: 'devnet',
        },
        null,
        2
      )
    );

    console.log(`💾 Saved to ${configPath}\n`);
    console.log('✅ Collection ready for member NFTs!');
  } catch (error) {
    console.error('❌ Error creating collection:', error);
    process.exit(1);
  }
}

// Run
createGenesisCollection();
