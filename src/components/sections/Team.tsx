"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
    { name: "N. Vance", role: "Lead Architect & Game Director", exp: "10+ years game dev engine experience", img: "/assets/images/team/captain_nexus.png" },
    { name: "S. Aris", role: "Blockchain Systems Lead", exp: "DeFi & Smart Contract specialist", img: "/assets/images/team/engineer_stella.png" },
    { name: "V. Kael", role: "Community & Growth Lead", exp: "Expert in Web3 ecosystem scaling", img: "/assets/images/team/pilot_vex.png" },
    { name: "A. Nova", role: "Creative Director", exp: "Award-winning visual design background", img: "/assets/images/team/commander_aura.png" }
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-black font-press-start mb-4 text-white drop-shadow-lg"
          >
            THE <span className="text-secondary">TEAM</span>
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass-card p-8 text-center group"
                >
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 group-hover:border-primary transition-colors shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                        <Image 
                            src={member.img}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <h3 className="text-xl font-press-start text-white mb-2 text-xs md:text-sm">{member.name}</h3>
                    <p className="text-primary font-vt323 text-lg mb-2">{member.role}</p>
                    <p className="text-xs text-gray-500 font-mono">{member.exp}</p>
                </motion.div>
            ))}
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center max-w-2xl mx-auto"
        >
            <p className="text-xs text-gray-500 font-mono bg-white/5 p-4 rounded-xl border border-white/10">
                <span className="text-secondary font-bold">TRANSPARENCY NOTE:</span> The OKMAYA core team operates with professional pseudonymous identities to focus on development in the early stages. The team will undergo full KYC verification prior to major CEX listings and institutional partnerships.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
