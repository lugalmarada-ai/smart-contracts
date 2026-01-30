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

  // Fetch holders count from BaseScan API
  useEffect(() => {
    const fetchHoldersCount = async () => {
      try {
        // BaseScan API endpoint for token holder count
        // Note: You may need an API key for production use
        const response = await fetch(
          `https://api.basescan.org/api?module=token&action=tokenholderlist&contractaddress=${OKY_TOKEN_ADDRESS}&page=1&offset=1`
        );

        const data = await response.json();

        if (data.status === '1' && data.result && Array.isArray(data.result)) {
          // BaseScan doesn't directly provide holder count in this endpoint
          // We'll use a placeholder for now - in production, integrate with The Graph or paid BaseScan API
          setHoldersCount(1250); // TODO: Replace with actual API integration
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching holders count:', error);
        setHoldersCount(1250); // Fallback
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
