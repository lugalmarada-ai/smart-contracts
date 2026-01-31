"use client";

import { motion } from "framer-motion";
import { FaRocket, FaBolt, FaInfinity } from "react-icons/fa";

const phases = [
    {
        icon: <FaRocket />,
        title: "Phase 1: Community Building",
        color: "text-cyan-400",
        items: ["Free-to-play base game", "Airdrop campaigns for early adopters", "Referral program with $OKY rewards", "Beta testing with exclusive rewards"]
    },
    {
        icon: <FaBolt />,
        title: "Phase 2: Revenue Generation",
        color: "text-primary",
        items: ["NFT ship marketplace (5% commission)", "Staking rewards (5-12% APY)", "Tournament prizes and competitions", "Premium ship upgrades"]
    },
    {
        icon: <FaInfinity />,
        title: "Phase 3: Liquidity Growth",
        color: "text-accent",
        items: ["Liquidity provider incentives", "DEX partnerships and listings", "Cross-chain bridge integration", "DeFi protocol collaborations"]
    }
];

export default function LiquidityStrategy() {
  return (
    <section id="liquidity" className="py-24 relative bg-black/20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-black font-press-start mb-4 text-white drop-shadow-lg"
          >
            LIQUIDITY <span className="text-primary">STRATEGY</span>
          </motion.h2>
          <p className="text-xl text-gray-400 font-vt323 tracking-wider">Building from Zero to Hero</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {phases.map((phase, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-8 hover:bg-white/10 transition-colors"
                >
                    <div className={`text-5xl mb-6 ${phase.color} drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]`}>
                        {phase.icon}
                    </div>
                    <h3 className={`text-2xl font-vt323 mb-6 ${phase.color}`}>{phase.title}</h3>
                    <ul className="space-y-3">
                        {phase.items.map((item, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                <span className="text-gray-600 mt-1">•</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 max-w-4xl mx-auto"
        >
             <h3 className="text-3xl font-vt323 text-white mb-8 text-center border-b border-white/10 pb-4">Revenue Streams</h3>
             <div className="grid md:grid-cols-2 gap-8">
                 <div>
                     <h4 className="text-xl font-vt323 text-cyan-400 mb-4">Primary Sources</h4>
                     <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Marketplace commissions: 5% of all sales</li>
                        <li>• Microtransactions: Energy, upgrades</li>
                        <li>• NFT sales: Exclusive ships and items</li>
                        <li>• Staking fees: 2% of rewards</li>
                     </ul>
                 </div>
                 <div>
                     <h4 className="text-xl font-vt323 text-cyan-400 mb-4">Secondary Sources</h4>
                     <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• In-game advertising</li>
                        <li>• Premium subscriptions</li>
                        <li>• Tournament entry fees</li>
                        <li>• Partnership sponsorships</li>
                     </ul>
                 </div>
             </div>
        </motion.div>
      </div>
    </section>
  );
}
