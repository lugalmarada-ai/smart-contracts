"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  { img: "/assets/elements/6.png", title: "Intense Combat", desc: "Real-time space battles with strategic depth" },
  { img: "/assets/elements/7.png", title: "Ship Evolution", desc: "Upgrade weapons, armor, and special abilities" },
  { img: "/assets/elements/8.png", title: "Fleet Command", desc: "Lead massive fleet battles across the galaxy" },
  { img: "/assets/elements/10.png", title: "Epic Campaigns", desc: "Explore star systems and complete missions" },
  { img: "/assets/elements/11.png", title: "NFT Arsenal", desc: "Collect and trade unique spacecraft NFTs" },
  { img: "/assets/elements/12.png", title: "Multi-Platform", desc: "Play seamlessly across all your devices" },
  { img: "/assets/elements/13.png", title: "Smart AI", desc: "Adaptive enemy AI that learns your tactics" },
  { img: "/assets/elements/14.png", title: "Power Cores", desc: "Collect rare energy cores for ultimate power" },
  { img: "/assets/elements/15.png", title: "Arsenal Mastery", desc: "Master dozens of unique weapon systems" },
  { img: "/assets/elements/16.png", title: "Space Stations", desc: "Build and defend strategic outposts" },
  { img: "/assets/elements/17.png", title: "Cosmic Trade", desc: "Participate in the galactic economy" },
  { img: "/assets/elements/18.png", title: "Star Alliances", desc: "Form powerful alliances with other pilots" },
  { img: "/assets/elements/19.png", title: "Deep Space", desc: "Explore uncharted regions of the galaxy" },
  { img: "/assets/elements/20.png", title: "Championships", desc: "Compete in galactic tournaments for glory" },
  { img: "/assets/elements/21.png", title: "Epic Rewards", desc: "Earn legendary loot and $OKY tokens" },
];

export default function GameFeatures() {
  return (
    <section id="game" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-press-start mb-4 text-white drop-shadow-lg">
            SPACE BATTLE <span className="text-primary">OVERVIEW</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
            >
              <div className="h-20 w-20 relative mb-4">
                 <Image 
                    src={feature.img} 
                    alt={feature.title} 
                    fill 
                    className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                 />
              </div>
              <h3 className="font-vt323 text-2xl text-primary mb-2 group-hover:text-white transition-colors uppercase tracking-wide">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
