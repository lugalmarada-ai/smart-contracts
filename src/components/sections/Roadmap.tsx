"use client";

import { motion } from "framer-motion";
import { FaRocket, FaHammer, FaGlobe } from "react-icons/fa";

const phases = [
    {
        quarter: "Q1 2026",
        title: "Foundation & Growth",
        icon: <FaRocket />,
        items: ["Contracts deployed on Base", "Public Presale Active", "Community building (Discord/TG)", "$OKY Token Audit"],
        color: "text-white"
    },
    {
        quarter: "Q2 2026",
        title: "Alpha Systems",
        icon: <FaHammer />,
        items: ["Core movement & combat mechanics", "Basic ship classes & weapons", "Staking v1 Launch", "Closed Alpha testing"],
        color: "text-primary"
    },
    {
        quarter: "Q3 2026",
        title: "Beta Expansion",
        icon: <FaGlobe />,
        items: ["Fleet management system", "PvP Arena prototype", "NFT ship crafting", "Beta testing (1,000 pilots)"],
        color: "text-secondary"
    }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-press-start mb-4 text-white drop-shadow-lg">
            DEVELOPMENT <span className="text-secondary">ROADMAP</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {phases.map((phase, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`glass-card p-8 flex flex-col items-start relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 ${index === 1 ? 'border-primary/50 shadow-[0_0_30px_rgba(139,92,246,0.2)]' : ''}`}
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-9xl transform rotate-12 translate-x-4 -translate-y-4">
                        {phase.icon}
                    </div>

                    <h3 className={`text-4xl font-vt323 mb-2 ${phase.color}`}>{phase.quarter}</h3>
                    <p className="text-xl font-bold mb-6 text-gray-200">{phase.title}</p>
                    
                    <ul className="space-y-4 relative z-10">
                        {phase.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shadow-[0_0_5px_#10B981]"></span>
                                <span className="text-gray-400 group-hover:text-gray-200 transition-colors text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
