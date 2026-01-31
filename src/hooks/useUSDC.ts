import { useReadContract, useWriteContract, useAccount, useBalance } from 'wagmi';
import { parseUnits, formatUnits, erc20Abi } from 'viem';
import { CONTRACT_ADDRESSES } from '@/config/contracts';

const USDC_ADDRESS = CONTRACT_ADDRESSES.USDC as `0x${string}`;
const PRESALE_ADDRESS = CONTRACT_ADDRESSES.OKYPresale as `0x${string}`;

export function useUSDC() {
  const { address } = useAccount();

  // Read: USDC Balance
  const { data: balance, refetch: refetchBalance } = useBalance({
    address: address,
    token: USDC_ADDRESS,
  });

  // Read: Allowance for Presale Contract
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    address: USDC_ADDRESS,
    abi: erc20Abi,
    functionName: 'allowance',
    args: address && PRESALE_ADDRESS ? [address, PRESALE_ADDRESS] : undefined,
  });

  const { writeContractAsync, isPending: isApproving } = useWriteContract();

  // Approve USDC spending
  const approve = async (amount: string) => {
    if (!amount || parseFloat(amount) <= 0) {
      throw new Error('Invalid approval amount');
    }

    try {
      // USDC has 6 decimals
      const amountWei = parseUnits(amount, 6);
      
      const hash = await writeContractAsync({
        address: USDC_ADDRESS,
        abi: erc20Abi,
        functionName: 'approve',
        args: [PRESALE_ADDRESS, amountWei],
        gas: BigInt(100000), // Manually set gas limit for better UX
      });

      // Refetch allowance after approval
      await refetchAllowance();
      
      return hash;
    } catch (err: any) {
      console.error('USDC approval failed:', err);
      throw err;
    }
  };

  // Check if user has approved enough USDC for the purchase
  const hasEnoughAllowance = (requiredAmount: string): boolean => {
    if (!allowance) return false;
    const required = parseUnits(requiredAmount, 6);
    return allowance >= required;
  };

  return {
    balance,
    allowance: allowance ? parseFloat(formatUnits(allowance, 6)) : 0,
    approve,
    hasEnoughAllowance,
    isApproving,
    refetchBalance,
    refetchAllowance,
  };
}
