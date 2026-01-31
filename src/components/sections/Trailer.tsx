"use client";

import { useRef, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Trailer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="trailer" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-press-start mb-4 text-gradient">GAME TRAILER</h2>
          <p className="text-xl text-gray-400 font-vt323 tracking-wider">Experience the Epic Space Battles</p>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.3)] bg-black/50 backdrop-blur-sm group">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/assets/images/game/backgrounds/space_bg.png"
              onClick={togglePlay}
            >
              <source src="/assets/video/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls Overlay */}
            <div className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                <button 
                    onClick={togglePlay}
                    className="w-20 h-20 rounded-full bg-primary/80 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all hover:scale-110 shadow-xl"
                >
                    {isPlaying ? <FaPause size={30} /> : <FaPlay size={30} className="ml-2" />}
                </button>
            </div>

            <div className="absolute bottom-6 right-6 z-20">
                <button 
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/70 transition-all border border-white/10"
                >
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
            </div>
          </div>
          
          <div className="text-center mt-12 max-w-2xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
                Drawing inspiration from the soul of classics like <span className="text-accent font-bold">Xenon 2: Megablast</span>, OKMAYA REALMS evolves the vertical-scrolling shooter into a modern on-chain odyssey. We combine high-octane 1989-style combat with 2026 technologies: flotas, celestial stations, and a player-driven economy on the Base network.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
