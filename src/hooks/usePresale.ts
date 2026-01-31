import { useReadContract, useWriteContract, useAccount, useBalance } from 'wagmi';
import { parseEther, formatEther, parseUnits, formatUnits } from 'viem';
import { OKY_PRESALE_ABI, CONTRACT_ADDRESSES } from '@/config/contracts';

const PRESALE_ADDRESS = CONTRACT_ADDRESSES.OKYPresale as `0x${string}`;

export function usePresale() {
  const { address } = useAccount();

  // Read: Presale Progress (totalUSDRaised, TARGET_RAISE, totalTokensSold, progressBps)
  const { data: presaleProgress, refetch: refetchProgress } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'getPresaleProgress',
  });

  // Read: User's Purchase Info
  const { data: userInfo, refetch: refetchUserInfo } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'getUserInfo',
    args: address ? [address] : undefined,
  });

  // Read: Presale Active Status
  const { data: isPresaleActive } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'isPresaleActive',
  });

  // NEW: Read Presale Price from contract
  const { data: contractPresalePrice } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'PRESALE_PRICE',
  });

  // NEW: Read Price Decimals from contract
  const { data: contractPriceDecimals } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'PRICE_DECIMALS',
  });

  // NEW: Read Bonus Percentage from contract
  const { data: contractBonusPercentage } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'BONUS_PERCENTAGE',
  });

  // NEW: Read ETH Price from Chainlink (via contract)
  const { data: contractETHPrice } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'getETHPrice',
  });

  // NEW: Read Presale End Time from contract
  const { data: presaleEndTime } = useReadContract({
    address: PRESALE_ADDRESS,
    abi: OKY_PRESALE_ABI,
    functionName: 'presaleEndTime',
  });

  // Read: ETH Balance
  const { data: ethBalance } = useBalance({
    address: address,
  });

  const { writeContractAsync, isPending, error } = useWriteContract();

  // Purchase with ETH
  const buyWithETH = async (ethAmount: string) => {
    if (!ethAmount || parseFloat(ethAmount) <= 0) {
      throw new Error('Invalid ETH amount');
    }

    try {
      const hash = await writeContractAsync({
        address: PRESALE_ADDRESS,
        abi: OKY_PRESALE_ABI,
        functionName: 'buyTokensETH',
        value: parseEther(ethAmount),
        gas: BigInt(200000), // Manually set gas limit for better UX
      });

      // Refetch data after successful purchase
      await refetchProgress();
      await refetchUserInfo();

      return hash;
    } catch (err: any) {
      console.error('ETH purchase failed:', err);
      throw err;
    }
  };

  // Purchase with USDC (requires approval first)
  const buyWithUSDC = async (usdcAmount: string) => {
    if (!usdcAmount || parseFloat(usdcAmount) <= 0) {
      throw new Error('Invalid USDC amount');
    }

    try {
      // USDC has 6 decimals on Base
      const usdcAmountWei = parseUnits(usdcAmount, 6);

      const hash = await writeContractAsync({
        address: PRESALE_ADDRESS,
        abi: OKY_PRESALE_ABI,
        functionName: 'buyTokensUSDC',
        args: [usdcAmountWei],
        gas: BigInt(250000), // Manually set gas limit for better UX
      });

      // Refetch data after successful purchase
      await refetchProgress();
      await refetchUserInfo();

      return hash;
    } catch (err: any) {
      console.error('USDC purchase failed:', err);
      throw err;
    }
  };

  // Parse presale progress data
  const progress = presaleProgress ? {
    raised: parseFloat(formatUnits((presaleProgress as any)[0] as bigint, 6)), // totalUSDRaised (6 decimals)
    target: parseFloat(formatUnits((presaleProgress as any)[1] as bigint, 6)), // TARGET_RAISE
    sold: parseFloat(formatEther((presaleProgress as any)[2] as bigint)), // totalTokensSold
    progressBps: Number((presaleProgress as any)[3]), // progressBps (basis points)
  } : null;

  // Parse user info
  const userStats = userInfo ? {
    tokensPurchased: parseFloat(formatEther((userInfo as any)[0] as bigint)),
    usdContributed: parseFloat(formatUnits((userInfo as any)[1] as bigint, 6)),
  } : null;

  // Calculate presale price in USD (from contract constants)
  const presalePriceUSD = contractPresalePrice && contractPriceDecimals
    ? Number(contractPresalePrice) / Number(contractPriceDecimals)
    : 0.0035; // Fallback

  // Get bonus percentage (from contract)
  const bonusPercentage = contractBonusPercentage
    ? Number(contractBonusPercentage)
    : 100; // Fallback

  // Get ETH price (from Chainlink via contract)
  const ethPriceUSD = contractETHPrice
    ? Number(contractETHPrice) / 10 ** 8  // Chainlink returns 8 decimals
    : 2933.92; // Fallback

  return {
    // Contract state
    presaleActive: isPresaleActive ?? false,
    progress,
    userStats,

    // User wallet
    ethBalance,

    // Actions
    buyWithETH,
    buyWithUSDC,
    isPending,
    error,

    // Utilities
    refetchProgress,
    refetchUserInfo,
    contractAddress: PRESALE_ADDRESS,

    // NEW: Dynamic contract values
    presalePriceUSD,
    bonusPercentage,
    ethPriceUSD,
    presaleEndTime: presaleEndTime ? Number(presaleEndTime) : null,
  };
}
