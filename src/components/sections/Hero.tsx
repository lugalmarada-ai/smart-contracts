"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaPlay, FaVideo } from "react-icons/fa";
import PresaleCard from "@/components/ui/PresaleCard";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-visible py-20 px-4 pt-32 lg:pt-20">
      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            
            {/* Left Content: Logo + Text & CTA */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
                {/* Logo - Above the text */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: -20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring" }}
                    className="mb-4 flex justify-center lg:justify-start"
                >
                    <Image
                        src="/logo_real.png"
                        alt="OKMAYA REALMS Logo"
                        width={400}
                        height={400}
                        className="w-[50vw] sm:w-[40vw] lg:w-[22vw] h-auto object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8"
                >
                    <h1 className="text-5xl md:text-7xl lg:text-7xl font-black mb-4 font-press-start tracking-tighter leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
                            OKMAYA
                        </span>
                        <br />
                        <span className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">REALMS</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-vt323 text-blue-200 mt-6 tracking-wide drop-shadow-md">
                        Epic Space Battles in the Crypto Galaxy
                    </p>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-gray-300 max-w-2xl mx-auto lg:mx-0 text-lg mb-12 leading-relaxed"
                >
                    Pilot advanced spacecraft, battle alien fleets, and earn <span className="text-accent font-bold">$OKY</span> tokens in the ultimate space shooter experience built on Base.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6"
                >
                    <Link href="#play" className="btn-primary group flex items-center gap-3">
                        <FaPlay className="group-hover:translate-x-1 transition-transform" />
                        PLAY NOW
                    </Link>
                    <Link href="#trailer" className="btn-secondary flex items-center gap-3 group">
                        <FaVideo className="group-hover:scale-110 transition-transform" />
                        View Trailer
                    </Link>
                </motion.div>
            </div>

            {/* Right Content: Presale Card */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                <PresaleCard />
            </div>
        </div>
      </div>



      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] -z-10"></div>
    </section>
  );
}
