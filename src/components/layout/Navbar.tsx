"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import AirdropModal from "../modals/AirdropModal";

const navLinks = [
  { name: "Trailer", href: "#trailer" },
  { name: "Game", href: "#game" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Liquidity", href: "#liquidity" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showAirdropModal, setShowAirdropModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md py-4 border-b border-primary/20" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 sm:h-12 sm:w-12">
               <Image 
                 src="/logo_real.png" 
                 alt="OKMAYA REALMS" 
                 fill
                 sizes="(max-width: 640px) 40px, 48px"
                 className="object-contain group-hover:scale-110 transition-transform"
               />
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gradient hidden sm:block tracking-wider">
              OKMAYA REALMS
            </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-primary transition-colors text-sm uppercase tracking-wider font-semibold"
            >
              {link.name}
            </Link>
          ))}
          <button 
            className="btn-primary text-sm px-6 py-2 uppercase tracking-wider"
            onClick={() => setShowAirdropModal(true)}
          >
            Join Airdrop
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white text-2xl z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white font-bold hover:text-primary uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}
             <button 
                className="btn-primary text-lg px-8 py-3 mt-4" 
                onClick={() => {
                  setIsOpen(false);
                  setShowAirdropModal(true);
                }}
              >
                Join Airdrop
             </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Airdrop Modal */}
      <AirdropModal 
        isOpen={showAirdropModal}
        onClose={() => setShowAirdropModal(false)}
      />
    </nav>
  );
}
