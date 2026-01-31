'use client';

import { useState, useEffect } from 'react';
import { useReadContract } from 'wagmi';
import { CONTRACT_ADDRESSES, OKY_TOKEN_ABI } from '@/config/contracts';

export function useTokenHolders() {
  const [holdersCount, setHoldersCount] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const OKY_TOKEN_ADDRESS = CONTRACT_ADDRESSES.OKYToken as `0x${string}`;

  // Read total supply from contract
  const { data: totalSupply } = useReadContract({
    address: OKY_TOKEN_ADDRESS,
    abi: OKY_TOKEN_ABI,
    functionName: 'totalSupply',
  });

  // Fetch holders count from Blockscout API
  useEffect(() => {
    const fetchHoldersCount = async () => {
      try {
        // Blockscout V2 API endpoint for token counters
        const response = await fetch(
          `https://base.blockscout.com/api/v2/tokens/${OKY_TOKEN_ADDRESS}/counters`
        );

        const data = await response.json();

        if (data && data.token_holders_count) {
          setHoldersCount(parseInt(data.token_holders_count));
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching holders count:', error);
        setIsLoading(false);
      }
    };

    fetchHoldersCount();

    // Refresh every 5 minutes
    const interval = setInterval(fetchHoldersCount, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [OKY_TOKEN_ADDRESS]);

  return {
    holdersCount,
    totalSupply,
    tokenAddress: OKY_TOKEN_ADDRESS,
    isLoading,
  };
}
