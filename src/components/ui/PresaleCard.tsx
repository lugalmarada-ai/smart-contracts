"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaEthereum, FaWallet, FaInfoCircle, FaDollarSign, FaCheckCircle, FaGithub, FaTelegram, FaUsers, FaCopy, FaShieldAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { usePresale } from '@/hooks/usePresale';
import { useUSDC } from '@/hooks/useUSDC';
import { useTokenHolders } from '@/hooks/useTokenHolders';
import { useVesting } from '@/hooks/useVesting';
import { formatEther } from 'viem';
import { CONTRACT_ADDRESSES } from '@/config/contracts';
import CountdownTimer from '@/components/ui/CountdownTimer';

export default function PresaleCard() {
    const [amount, setAmount] = useState<string>("10");
    const [selectedToken, setSelectedToken] = useState<"ETH" | "USDC">("ETH");
    const [purchaseStatus, setPurchaseStatus] = useState<'idle' | 'approving' | 'buying' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [copied, setCopied] = useState<boolean>(false);

    const { isConnected } = useAccount();
    const {
        presaleActive,
        progress,
        userStats,
        buyWithETH,
        buyWithUSDC,
        isPending,
        ethBalance,
        presalePriceUSD,
        bonusPercentage,
        ethPriceUSD,
        presaleEndTime,
    } = usePresale();

    const {
        balance: usdcBalance,
        hasEnoughAllowance,
        approve,
        isApproving
    } = useUSDC();

    const { liquidity, isLoaded: vestingLoaded } = useVesting();

    const { tokenAddress, holdersCount } = useTokenHolders();

    // Dynamic holders count from hook
    const displayHoldersCount = holdersCount ?? 0;

    // ✅ Dynamic values from smart contract (NO MORE HARDCODED!)
    const PRESALE_PRICE = presalePriceUSD || 0.0035; // From contract PRESALE_PRICE constant
    const LAUNCH_PRICE = 0.01; // $0.01 per OKY (listing price - post-presale price)
    const BONUS_PERCENTAGE = bonusPercentage || 100; // From contract BONUS_PERCENTAGE constant

    // ✅ Real-time ETH price from Chainlink oracle via contract
    const ETH_PRICE = ethPriceUSD || 2933.92; // Fallback only if Chainlink fails

    // Real-time progress from contract
    const raisedAmount = progress?.raised ?? 0;
    const targetAmount = progress?.target ?? 150000; // Fallback to $150k (contract TARGET_RAISE)
    const progressPercentage = Math.min((raisedAmount / targetAmount) * 100, 100);

    // Calculate tokens user will receive
    const usdValue = selectedToken === "ETH"
        ? parseFloat(amount || "0") * ETH_PRICE
        : parseFloat(amount || "0");

    const baseTokens = usdValue / PRESALE_PRICE;
    const bonusTokens = baseTokens * (BONUS_PERCENTAGE / 100);
    const totalTokens = baseTokens + bonusTokens;

    // Check if user needs to approve USDC
    const needsApproval = selectedToken === "USDC" && !hasEnoughAllowance(amount || "0");

    // Handle purchase
    const handlePurchase = async () => {
        if (!amount || parseFloat(amount) <= 0) {
            setErrorMessage('Please enter a valid amount');
            return;
        }

        try {
            setErrorMessage('');

            if (selectedToken === 'USDC' && needsApproval) {
                // Step 1: Approve USDC
                setPurchaseStatus('approving');
                await approve(amount);
                setPurchaseStatus('idle');
                // After approval, user needs to click buy again
                return;
            }

            // Step 2: Execute purchase
            setPurchaseStatus('buying');
            if (selectedToken === 'ETH') {
                await buyWithETH(amount);
            } else {
                await buyWithUSDC(amount);
            }

            setPurchaseStatus('success');
            setAmount('10'); // Reset amount

            // Reset success state after 3 seconds
            setTimeout(() => setPurchaseStatus('idle'), 3000);

        } catch (error: any) {
            console.error('Purchase error:', error);
            setPurchaseStatus('error');
            setErrorMessage(error?.message || 'Transaction failed. Please try again.');
            setTimeout(() => setPurchaseStatus('idle'), 5000);
        }
    };

    // Copy token address to clipboard
    const copyToClipboard = () => {
        if (tokenAddress) {
            navigator.clipboard.writeText(tokenAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const isLoading = isPending || isApproving || purchaseStatus === 'buying' || purchaseStatus === 'approving';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-full lg:max-w-md mx-auto"
        >
            {/* Neon Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-purple-500 to-secondary rounded-2xl blur opacity-75 animate-pulse"></div>

            <div className="relative glass-card p-6 overflow-hidden">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="text-xl font-bold font-press-start text-white">
                            {presaleActive ? 'Presale is Live' : 'Presale Inactive'}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1 font-mono">Price: ${PRESALE_PRICE} + {BONUS_PERCENTAGE}% Bonus</p>
                    </div>
                    <div className={`flex items-center gap-2 ${presaleActive ? 'bg-green-500/10 border-green-500/50' : 'bg-red-500/10 border-red-500/50'} border px-3 py-1 rounded-full`}>
                        <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${presaleActive ? 'bg-green-400' : 'bg-red-400'} opacity-75`}></span>
                            <span className={`relative inline-flex rounded-full h-2 w-2 ${presaleActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                        </span>
                        <span className={`text-xs font-bold ${presaleActive ? 'text-green-400' : 'text-red-400'} uppercase tracking-wider`}>
                            {presaleActive ? 'Live' : 'Inactive'}
                        </span>
                    </div>
                </div>

                {/* Countdown Timer & Holders */}
                <div className="mb-6 space-y-3">
                    {presaleEndTime && (
                        <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5">
                            <p className="text-xs text-gray-400 mb-2 text-center">Presale Ends In:</p>
                            <CountdownTimer endDate={presaleEndTime} />
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                {new Date(presaleEndTime * 1000).toLocaleString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    timeZoneName: 'short'
                                })}
                            </p>
                        </div>
                    )}

                    <div className="bg-slate-950/50 rounded-xl p-3 border border-white/5 flex items-center justify-center gap-2">
                        <FaUsers className="text-primary" />
                        <span className="text-sm text-gray-400">Token Holders:</span>
                        <span className="text-lg font-bold text-white">{displayHoldersCount.toLocaleString()}</span>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                        <span>Raised: ${raisedAmount.toLocaleString(undefined, { maximumFractionDigits: 0 })}</span>
                        <span>Goal: ${targetAmount.toLocaleString()}</span>
                    </div>
                    <div className="h-4 bg-slate-800 rounded-full overflow-hidden border border-white/5 relative">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercentage}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-primary via-purple-500 to-secondary relative"
                        >
                            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                        </motion.div>
                    </div>
                    <div className="flex justify-end mt-1">
                        <span className="text-xs font-bold text-primary">{progressPercentage.toFixed(2)}% Completed</span>
                    </div>
                </div>

                {/* User Stats */}
                {isConnected && userStats && userStats.tokensPurchased > 0 && (
                    <div className="bg-slate-950/50 rounded-xl p-3 border border-primary/20 mb-6">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-400">Your Contribution:</span>
                            <span className="text-sm font-bold text-white">{userStats.tokensPurchased.toLocaleString()} OKY</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <span className="text-xs text-gray-400">USD Spent:</span>
                            <span className="text-sm font-bold text-accent">${userStats.usdContributed.toLocaleString()}</span>
                        </div>
                    </div>
                )}

                {/* Price Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 text-center">
                        <p className="text-xs text-gray-400 mb-1">Presale Price</p>
                        <p className="text-lg font-bold text-accent">${PRESALE_PRICE}</p>
                    </div>
                    <div className="bg-slate-800/50 p-3 rounded-xl border border-white/5 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-green-500/80 text-[0.6rem] px-2 py-0.5 text-white rounded-bl-lg">+{BONUS_PERCENTAGE}%</div>
                        <p className="text-xs text-gray-400 mb-1">Bonus Tokens</p>
                        <p className="text-lg font-bold text-green-400">{bonusTokens.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-300 mb-3 ml-1">Choose Payment Method</label>
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setSelectedToken("ETH")}
                            className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-200 ${selectedToken === "ETH" ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-slate-800/50 border-white/5 text-gray-400 hover:bg-slate-800"}`}
                        >
                            <FaEthereum className="text-blue-400" />
                            <span className="font-bold">ETH</span>
                        </button>
                        <button
                            onClick={() => setSelectedToken("USDC")}
                            className={`flex items-center justify-center gap-2 p-3 rounded-xl border transition-all duration-200 ${selectedToken === "USDC" ? "bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(59,130,246,0.2)]" : "bg-slate-800/50 border-white/5 text-gray-400 hover:bg-slate-800"}`}
                        >
                            <FaDollarSign className="text-blue-400" />
                            <span className="font-bold">USDC</span>
                        </button>
                    </div>
                </div>

                {/* Amount Input */}
                <div className="mb-6 relative">
                    <div className="flex justify-between items-center mb-2 ml-1">
                        <label className="text-sm font-bold text-gray-300">
                            You Pay <span className="text-xs font-normal text-gray-400">({selectedToken})</span>
                        </label>
                        <span className="text-xs text-gray-400">
                            Balance: {selectedToken === 'ETH'
                                ? ethBalance ? parseFloat(formatEther(ethBalance.value)).toFixed(4) : '0.00'
                                : usdcBalance ? usdcBalance.formatted.slice(0, 8) : '0.00'
                            } {selectedToken}
                        </span>
                    </div>
                    <div className="relative">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-4 pl-4 pr-16 text-white font-mono text-lg focus:outline-none focus:border-primary transition-colors"
                            placeholder="0.0"
                            step={selectedToken === 'ETH' ? '0.001' : '1'}
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
                            {selectedToken === "ETH" ? <FaEthereum className="text-gray-400" /> : <FaDollarSign className="text-blue-400" />}
                            <span className="font-bold text-gray-400">{selectedToken}</span>
                        </div>
                    </div>
                </div>

                {/* Receiving Amount */}
                <div className="bg-slate-950/50 rounded-xl p-4 border border-white/5 mb-6">
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-300">You Receive <span className="text-accent font-bold">$OKY</span></span>
                        <span className="text-xs text-green-400 flex items-center gap-1">
                            <FaInfoCircle /> +{BONUS_PERCENTAGE}% Bonus
                        </span>
                    </div>
                    <div className="text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                        {totalTokens.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                        {baseTokens.toLocaleString(undefined, { maximumFractionDigits: 0 })} base + {bonusTokens.toLocaleString(undefined, { maximumFractionDigits: 0 })} bonus
                    </div>
                </div>

                {/* Error Message */}
                {errorMessage && (
                    <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-3 mb-4">
                        <p className="text-xs text-red-400 text-center">{errorMessage}</p>
                    </div>
                )}

                {/* Success Message */}
                {purchaseStatus === 'success' && (
                    <div className="bg-green-500/10 border border-green-500/50 rounded-xl p-3 mb-4 flex items-center justify-center gap-2">
                        <FaCheckCircle className="text-green-400" />
                        <p className="text-xs text-green-400 font-bold">Purchase Successful!</p>
                    </div>
                )}

                {/* Action Button */}
                {!isConnected ? (
                    <div className="w-full">
                        <ConnectButton.Custom>
                            {({ openConnectModal, mounted }) => (
                                <button
                                    onClick={openConnectModal}
                                    disabled={!mounted}
                                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-purple-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                                >
                                    <FaWallet />
                                    Connect Wallet To Buy
                                </button>
                            )}
                        </ConnectButton.Custom>
                    </div>
                ) : !presaleActive ? (
                    <button
                        disabled
                        className="w-full bg-gray-600 text-white font-bold py-4 rounded-xl opacity-50 cursor-not-allowed"
                    >
                        Presale Not Active
                    </button>
                ) : (
                    <button
                        onClick={handlePurchase}
                        disabled={isLoading || !amount || parseFloat(amount) <= 0}
                        className="w-full bg-gradient-to-r from-accent to-green-600 hover:from-green-400 hover:to-green-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isLoading ? (
                            <span className="animate-pulse">
                                {purchaseStatus === 'approving' ? 'Approving USDC...' : 'Processing...'}
                            </span>
                        ) : needsApproval ? (
                            <>
                                <FaCheckCircle />
                                Approve USDC First
                            </>
                        ) : (
                            <>
                                <FaWallet />
                                Buy with {selectedToken}
                            </>
                        )}
                    </button>
                )}

                {/* Token Address */}
                <div className="mt-6 bg-slate-950/50 rounded-xl p-3 border border-white/5">
                    <div className="flex items-center justify-between">
                        <div className="flex-1">
                            <p className="text-xs text-gray-400 mb-1">OKY Token Address</p>
                            <p className="text-xs font-mono text-white break-all">
                                {CONTRACT_ADDRESSES.OKYToken}
                            </p>
                        </div>
                        <button
                            onClick={copyToClipboard}
                            className="ml-2 p-2 hover:bg-slate-800 rounded-lg transition-colors"
                            title="Copy address"
                        >
                            {copied ? (
                                <FaCheckCircle className="text-green-400" />
                            ) : (
                                <FaCopy className="text-gray-400 hover:text-white" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Security Trust Badge */}
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4 py-3 border-y border-white/5">
                    <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                        <FaShieldAlt className="text-primary text-xs" />
                        <span className="text-[10px] text-gray-400 font-mono">
                            Liq. Lock: {vestingLoaded && liquidity ? liquidity.cliffText : "6 Months"}
                        </span>
                    </div>
                    <div className="h-3 w-px bg-white/10 hidden sm:block"></div>
                    <div className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
                        <FaInfoCircle className="text-secondary text-xs" />
                        <span className="text-[10px] text-gray-400 font-mono italic">Audit: In Progress</span>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-4 flex items-center justify-center gap-4">
                    <a
                        href="https://github.com/lugalmarada-ai/smart-contracts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
                        title="GitHub"
                    >
                        <FaGithub className="text-white text-xl" />
                    </a>
                    <a
                        href="https://x.com/okmayagame"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
                        title="X (Twitter)"
                    >
                        <FaXTwitter className="text-white text-xl" />
                    </a>
                    <a
                        href="https://t.me/okmayagame"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/50 hover:bg-slate-700 rounded-lg transition-all hover:scale-110"
                        title="Telegram"
                    >
                        <FaTelegram className="text-white text-xl" />
                    </a>
                </div>

                <p className="text-[10px] text-center text-gray-600 mt-4">
                    By purchasing, you agree to our Terms of Service and Privacy Policy.
                </p>
            </div>
        </motion.div>
    );
}
