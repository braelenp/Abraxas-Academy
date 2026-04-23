/**
 * useGenesisNFT Hook - React integration for Genesis NFT operations
 * Handles minting, fetching, and membership verification
 */

import { useEffect, useState, useCallback } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { useMetaplex } from '../providers/MetaplexProvider';
import { MetaplexNFTService, GenesisNFTData, MintResult, getNFTService } from '../services/metaplexService';

export interface UseGenesisNFTReturn {
  // State
  genesisNFT: GenesisNFTData | null;
  hasGenesisNFT: boolean;
  memberNumber: number | null;
  memberRune: string | null;
  memberBlessing: string | null;
  
  // Loading states
  isLoading: boolean;
  isMinting: boolean;
  
  // Error state
  error: string | null;
  
  // Actions
  mintGenesisNFT: () => Promise<MintResult>;
  refetch: () => Promise<void>;
  clear: () => void;
}

/**
 * Hook to manage Genesis NFT for the current user
 */
export function useGenesisNFT(): UseGenesisNFTReturn {
  const { publicKey } = useWallet();
  const metaplex = useMetaplex();
  
  // State
  const [genesisNFT, setGenesisNFT] = useState<GenesisNFTData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Get NFT service
  const nftService = metaplex ? getNFTService(metaplex) : null;

  /**
   * Fetch user's Genesis NFT
   */
  const fetchGenesisNFT = useCallback(async () => {
    if (!publicKey || !nftService) {
      setGenesisNFT(null);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const nft = await nftService.fetchGenesisNFT(publicKey);
      setGenesisNFT(nft);
    } catch (err) {
      console.error('Error fetching Genesis NFT:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch Genesis NFT');
      setGenesisNFT(null);
    } finally {
      setIsLoading(false);
    }
  }, [publicKey, nftService]);

  /**
   * Mint Genesis NFT for the user
   */
  const handleMintGenesisNFT = useCallback(async (): Promise<MintResult> => {
    if (!publicKey || !nftService) {
      const err = 'Wallet not connected or Metaplex not initialized';
      setError(err);
      return { success: false, error: err };
    }

    setIsMinting(true);
    setError(null);

    try {
      const result = await nftService.mintGenesisNFT(publicKey);
      
      if (result.success) {
        // Refetch NFT data after successful mint
        await fetchGenesisNFT();
      } else {
        setError(result.error || 'Failed to mint NFT');
      }
      
      return result;
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Unknown error during minting';
      setError(errorMsg);
      return { success: false, error: errorMsg };
    } finally {
      setIsMinting(false);
    }
  }, [publicKey, nftService, fetchGenesisNFT]);

  /**
   * Clear current state
   */
  const handleClear = useCallback(() => {
    setGenesisNFT(null);
    setError(null);
    setIsLoading(false);
    setIsMinting(false);
  }, []);

  /**
   * Fetch Genesis NFT when wallet connects
   */
  useEffect(() => {
    if (publicKey) {
      fetchGenesisNFT();
    } else {
      setGenesisNFT(null);
    }
  }, [publicKey, fetchGenesisNFT]);

  return {
    // State
    genesisNFT,
    hasGenesisNFT: genesisNFT !== null,
    memberNumber: genesisNFT?.memberNumber ?? null,
    memberRune: genesisNFT?.rune ?? null,
    memberBlessing: genesisNFT?.blessing ?? null,
    
    // Loading states
    isLoading,
    isMinting,
    
    // Error state
    error,
    
    // Actions
    mintGenesisNFT: handleMintGenesisNFT,
    refetch: fetchGenesisNFT,
    clear: handleClear,
  };
}

export default useGenesisNFT;
