"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaTelegram, FaInstagram, FaTwitter, FaWallet, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { useAccount } from "wagmi";

interface AirdropModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type VerificationStep = "telegram" | "instagram" | "twitter";

interface VerificationState {
  telegram: boolean;
  instagram: boolean;
  twitter: boolean;
}

export default function AirdropModal({ isOpen, onClose }: AirdropModalProps) {
  const { address, isConnected } = useAccount();
  const [verificationState, setVerificationState] = useState<VerificationState>({
    telegram: false,
    instagram: false,
    twitter: false,
  });
  const [isVerifying, setIsVerifying] = useState<VerificationStep | null>(null);
  const [isClaiming, setIsClaiming] = useState(false);
  const [claimSuccess, setClaimSuccess] = useState(false);

  // Social media URLs (to be updated by user later)
  const socialLinks = {
    telegram: "https://t.me/okmayarealms", // Placeholder
    instagram: "https://instagram.com/okmayarealms", // Placeholder
    twitter: "https://twitter.com/okmayarealms", // Placeholder
  };

  const handleVerify = async (platform: VerificationStep) => {
    setIsVerifying(platform);
    
    // Open the social media link in new tab
    window.open(socialLinks[platform], "_blank");
    
    // Simulate verification (in production, this would call your backend API)
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setVerificationState((prev) => ({ ...prev, [platform]: true }));
    setIsVerifying(null);
  };

  const handleClaim = async () => {
    if (!isConnected || !address) {
      alert("Please connect your wallet first");
      return;
    }

    setIsClaiming(true);
    
    try {
      // TODO: Call backend API to verify social media follows
      // TODO: Get signature from backend
      // TODO: Call smart contract claimAirdrop(signature)
      
      // Simulate claim process
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      setClaimSuccess(true);
    } catch (error) {
      console.error("Claim failed:", error);
      alert("Claim failed. Please try again.");
    } finally {
      setIsClaiming(false);
    }
  };

  const allVerified = verificationState.telegram && verificationState.instagram && verificationState.twitter;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md glass-card p-8 border-2 border-primary/30 max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <FaTimes size={24} />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-press-start text-gradient mb-2">Join Airdrop</h2>
            <p className="text-gray-400 text-sm font-vt323 text-xl">
              Claim <span className="text-accent font-bold">$10 worth of $OKY</span>
            </p>
          </div>

          {claimSuccess ? (
            // Success State
            <div className="text-center py-8">
              <FaCheckCircle className="text-accent text-6xl mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Claim Successful!</h3>
              <p className="text-gray-300">
                $10 worth of $OKY has been sent to your wallet!
              </p>
              <button
                onClick={onClose}
                className="btn-primary mt-6"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Wallet Connection */}
              <div className="mb-6 p-4 bg-slate-800/50 rounded-xl border border-white/10">
                <div className="flex items-center gap-3 mb-2">
                  <FaWallet className="text-accent" />
                  <span className="text-sm font-bold text-white">Wallet Address</span>
                </div>
                {isConnected && address ? (
                  <p className="text-xs font-mono text-gray-300 break-all">
                    {address}
                  </p>
                ) : (
                  <p className="text-xs text-gray-400">
                    Please connect your wallet to continue
                  </p>
                )}
              </div>

              {/* Verification Steps */}
              <div className="space-y-4 mb-6">
                <p className="text-sm text-gray-300 mb-4">
                  Follow our social media to verify and claim your airdrop:
                </p>

                {/* Telegram */}
                <VerificationButton
                  icon={<FaTelegram />}
                  platform="Telegram"
                  isVerified={verificationState.telegram}
                  isVerifying={isVerifying === "telegram"}
                  onClick={() => handleVerify("telegram")}
                  color="bg-blue-500"
                />

                {/* Instagram */}
                <VerificationButton
                  icon={<FaInstagram />}
                  platform="Instagram"
                  isVerified={verificationState.instagram}
                  isVerifying={isVerifying === "instagram"}
                  onClick={() => handleVerify("instagram")}
                  color="bg-pink-500"
                />

                {/* Twitter/X */}
                <VerificationButton
                  icon={<FaTwitter />}
                  platform="X (Twitter)"
                  isVerified={verificationState.twitter}
                  isVerifying={isVerifying === "twitter"}
                  onClick={() => handleVerify("twitter")}
                  color="bg-sky-500"
                />
              </div>

              {/* Claim Button */}
              <button
                onClick={handleClaim}
                disabled={!isConnected || !allVerified || isClaiming}
                className={`w-full btn-primary py-4 text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 ${
                  !isConnected || !allVerified || isClaiming
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                {isClaiming ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Claiming...
                  </>
                ) : (
                  "Claim $10 in $OKY"
                )}
              </button>

              {!isConnected && (
                <p className="text-xs text-center text-gray-400 mt-4">
                  ⚠️ Connect your wallet to claim
                </p>
              )}
              {isConnected && !allVerified && (
                <p className="text-xs text-center text-gray-400 mt-4">
                  ⚠️ Complete all verification steps to claim
                </p>
              )}
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// Verification Button Component
interface VerificationButtonProps {
  icon: React.ReactNode;
  platform: string;
  isVerified: boolean;
  isVerifying: boolean;
  onClick: () => void;
  color: string;
}

function VerificationButton({
  icon,
  platform,
  isVerified,
  isVerifying,
  onClick,
  color,
}: VerificationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={isVerified || isVerifying}
      className={`w-full p-4 rounded-xl border-2 transition-all flex items-center justify-between ${
        isVerified
          ? "bg-green-500/20 border-green-500"
          : "bg-slate-800/50 border-white/10 hover:border-primary/50"
      } ${isVerified || isVerifying ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      <div className="flex items-center gap-3">
        <div className={`${color} p-2 rounded-lg text-white`}>
          {icon}
        </div>
        <span className="font-semibold text-white">{platform}</span>
      </div>
      
      {isVerifying ? (
        <FaSpinner className="animate-spin text-accent" />
      ) : isVerified ? (
        <FaCheckCircle className="text-green-500 text-xl" />
      ) : (
        <span className="text-xs text-gray-400 uppercase">Verify</span>
      )}
    </button>
  );
}
