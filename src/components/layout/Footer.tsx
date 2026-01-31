import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaTelegram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-primary/20 py-12 relative z-10">
      <div className="container mx-auto px-6 text-center">
        <Link href="/" className="inline-block mb-6">
          <div className="relative h-16 w-16 mx-auto">
            <Image
              src="/logo_real.png"
              alt="OKMAYA REALMS"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <div className="flex justify-center gap-8 mb-8">
          <Link href="https://x.com/Okmayagame" target="_blank" className="text-gray-400 hover:text-primary hover:scale-125 transition-all duration-300">
            <FaTwitter size={24} />
          </Link>
          <Link href="https://t.me/okmayagame" target="_blank" className="text-gray-400 hover:text-primary hover:scale-125 transition-all duration-300">
            <FaTelegram size={24} />
          </Link>
          <Link href="https://github.com/lugalmarada-ai/smart-contracts" target="_blank" className="text-gray-400 hover:text-primary hover:scale-125 transition-all duration-300">
            <FaGithub size={24} />
          </Link>
        </div>

        <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
          <strong>Disclaimer:</strong> $OKY is a utility token for the OKMAYA REALMS space battle ecosystem.
          Its value is derived from its utility within the game. All investments carry risk.
        </p>

        <p className="text-xs text-gray-600 font-mono">
          &copy; {new Date().getFullYear()} OKMAYA REALMS. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
