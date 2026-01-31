"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaCoins, FaChartPie, FaExternalLinkAlt, FaLock, FaUsers } from "react-icons/fa";
import { CONTRACT_ADDRESSES } from "@/config/contracts";

export default function Tokenomics() {
    const allocation = [
        { label: "Game Rewards", value: 40, color: "#10B981", vesting: "Play-to-Earn pool distribution" },
        { label: "Development", value: 15, color: "#3B82F6", vesting: "6 months cliff, 12 months linear" },
        { label: "Marketing", value: 7, color: "#8B5CF6", vesting: "6 months cliff, 12 months linear" },
        { label: "Airdrop", value: 3, color: "#F472B6", vesting: "Immediate unlock" },
        { label: "Presale", value: 10, color: "#00FFFF", vesting: "Immediate unlock" },
        { label: "Liquidity", value: 15, color: "#EC4899", vesting: "Locked 12 months via smart contract" },
        { label: "Team", value: 10, color: "#F59E0B", vesting: "6 months cliff, 12 months linear" },
    ];

    const TOKEN_ADDRESS = CONTRACT_ADDRESSES.OKYToken;
    const BASESCAN_TOKEN = `https://basescan.org/token/${TOKEN_ADDRESS}`;
    const BASESCAN_HOLDERS = `${BASESCAN_TOKEN}#balances`;

    return (
        <section id="tokenomics" className="py-24 relative overflow-hidden bg-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black font-press-start mb-4 text-gradient"
                    >
                        TOKENOMICS <span className="text-white">2.0</span>
                    </motion.h2>
                    <p className="text-xl text-gray-400 font-vt323 tracking-wider">Gaming-Focused Utility for $OKY</p>
                </div>

                {/* On-Chain Verification Banner */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card p-6 mb-12 border-accent/30"
                >
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                        <a
                            href={BASESCAN_TOKEN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors group"
                        >
                            <FaCheckCircle className="group-hover:scale-110 transition-transform" />
                            <span className="font-mono">Contract Verified</span>
                            <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <span className="text-gray-600">|</span>
                        <a
                            href={BASESCAN_HOLDERS}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-white hover:text-accent transition-colors group"
                        >
                            <FaUsers className="text-primary group-hover:scale-110 transition-transform" />
                            <span className="font-mono">View Holders on BaseScan</span>
                            <FaExternalLinkAlt className="text-xs" />
                        </a>
                        <span className="text-gray-600">|</span>
                        <div className="flex items-center gap-2 text-gray-400">
                            <FaLock className="text-green-400" />
                            <span className="font-mono">LP Locked 12 Months</span>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-xs text-gray-500 font-mono">
                            Token: <span className="text-accent">{TOKEN_ADDRESS}</span>
                        </p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Utility List */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 hover:border-accent/40 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <FaCoins className="text-accent text-3xl" />
                            <h3 className="text-3xl font-vt323 text-accent">$OKY Token Utility</h3>
                        </div>
                        <ul className="space-y-6 text-lg">
                            {[
                                "Ship upgrades & weapons systems",
                                "Fleet formation & management",
                                "Tournament entry fees",
                                "NFT ship crafting & upgrading",
                                "Exclusive sector access passes",
                                "Staking for passive rewards (APY: 5-12%)"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <FaCheckCircle className="text-accent mt-1 group-hover:scale-125 transition-transform" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Allocation Chart */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-12 hover:border-secondary/40 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <FaChartPie className="text-secondary text-3xl" />
                            <h3 className="text-3xl font-vt323 text-secondary">Token Allocation</h3>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-8">
                            {/* CSS Conic Gradient Chart */}
                            <div className="relative w-48 h-48">
                                {/* Chart Background */}
                                <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all hover:rotate-12 hover:scale-105 duration-500"
                                    style={{
                                        background: `conic-gradient(
                                     ${allocation[0].color} 0% 40%,
                                     ${allocation[1].color} 40% 55%,
                                     ${allocation[2].color} 55% 62%,
                                     ${allocation[3].color} 62% 65%,
                                     ${allocation[4].color} 65% 75%,
                                     ${allocation[5].color} 75% 90%,
                                     ${allocation[6].color} 90% 100%
                                 )`
                                    }}
                                ></div>
                                {/* Static Center Text */}
                                <div className="absolute inset-4 bg-[#1e293b] rounded-full flex items-center justify-center pointer-events-none">
                                    <span className="font-bold text-white text-xl">1B Supply</span>
                                </div>
                            </div>

                            <div className="space-y-4 flex-1">
                                {allocation.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between group">
                                        <div className="flex items-center gap-3">
                                            <span className="w-3 h-3 rounded-full shadow-[0_0_10px]" style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}></span>
                                            <span className="text-gray-300 group-hover:text-white transition-colors text-sm font-bold uppercase">{item.label}</span>
                                        </div>
                                        <span className="font-mono text-white">{item.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="flex items-center justify-between text-sm text-gray-400">
                                <span>Total Supply</span>
                                <span className="font-mono text-white text-lg">1,000,000,000 $OKY</span>
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Vesting Schedule Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 glass-card p-8"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <FaLock className="text-green-400 text-2xl" />
                        <h3 className="text-2xl font-vt323 text-white">Vesting Schedule</h3>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allocation.filter(item => item.value > 0).map((item, i) => (
                            <div key={i} className="bg-slate-950/50 rounded-lg p-4 border border-white/5 hover:border-white/10 transition-colors">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                                    <h4 className="font-bold text-white uppercase text-sm">{item.label}</h4>
                                </div>
                                <div className="space-y-2 text-xs">
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Allocation:</span>
                                        <span className="text-white font-mono">{item.value}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-400">Amount:</span>
                                        <span className="text-white font-mono">{(item.value * 10).toFixed(0)}M OKY</span>
                                    </div>
                                    <div className="mt-2 pt-2 border-t border-white/5">
                                        <p className="text-gray-300 text-xs">{item.vesting}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 bg-accent/10 border border-accent/30 rounded-lg">
                        <p className="text-sm text-gray-300 text-center">
                            🔒 <strong className="text-white">Team & Development tokens</strong> are vested to ensure long-term commitment.{" "}
                            <strong className="text-accent">Liquidity is locked for 12 months</strong> to protect investors.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
