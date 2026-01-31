import { useReadContract } from 'wagmi';
import { OKY_VESTING_ABI, CONTRACT_ADDRESSES } from '@/config/contracts';

const VESTING_ADDRESS = CONTRACT_ADDRESSES.OKYVesting as `0x${string}`;

export function useVesting() {
  // 1. Fetch Schedule IDs
  const { data: liquidityId } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'liquidityScheduleId',
  });

  const { data: teamId } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'teamScheduleId',
  });

  const { data: devId } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'developmentScheduleId',
  });

  const { data: marketingId } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'marketingScheduleId',
  });

  // 2. Fetch Schedule Details
  const { data: liquiditySchedule } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'vestingSchedules',
    args: liquidityId ? [liquidityId] : undefined,
    query: { enabled: !!liquidityId },
  });

  const { data: teamSchedule } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'vestingSchedules',
    args: teamId ? [teamId] : undefined,
    query: { enabled: !!teamId },
  });

  const { data: devSchedule } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'vestingSchedules',
    args: devId ? [devId] : undefined,
    query: { enabled: !!devId },
  });

  const { data: marketingSchedule } = useReadContract({
    address: VESTING_ADDRESS,
    abi: OKY_VESTING_ABI,
    functionName: 'vestingSchedules',
    args: marketingId ? [marketingId] : undefined,
    query: { enabled: !!marketingId },
  });

  const formatDuration = (seconds: bigint | number) => {
    const sec = Number(seconds);
    if (sec === 0) return 'Immediate unlock';
    const months = Math.floor(sec / (30 * 24 * 60 * 60));
    if (months > 0) return `${months} month${months > 1 ? 's' : ''}`;
    const days = Math.floor(sec / (24 * 60 * 60));
    return `${days} day${days > 1 ? 's' : ''}`;
  };

  const parseSchedule = (schedule: any) => {
    if (!schedule) return null;
    return {
      totalAmount: schedule[0],
      releasedAmount: schedule[1],
      startTime: Number(schedule[2]),
      cliffDuration: Number(schedule[3]),
      vestingDuration: Number(schedule[4]),
      monthlyReleasePercent: Number(schedule[5]),
      isLiquidity: schedule[6],
      beneficiary: schedule[7],
      cliffText: formatDuration(schedule[3]),
      durationText: formatDuration(schedule[4]),
    };
  };

  return {
    liquidity: parseSchedule(liquiditySchedule),
    team: parseSchedule(teamSchedule),
    dev: parseSchedule(devSchedule),
    marketing: parseSchedule(marketingSchedule),
    isLoaded: !!liquiditySchedule || !!teamSchedule || !!devSchedule || !!marketingSchedule,
  };
}
