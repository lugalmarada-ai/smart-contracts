import Hero from "@/components/sections/Hero";
import Trailer from "@/components/sections/Trailer";
import GameFeatures from "@/components/sections/GameFeatures";
import Tokenomics from "@/components/sections/Tokenomics";
import Roadmap from "@/components/sections/Roadmap";
import LiquidityStrategy from "@/components/sections/LiquidityStrategy";
import Team from "@/components/sections/Team";

export default function Home() {
  return (
    <>
      <Hero />
      <Trailer />
      <GameFeatures />
      <Tokenomics />
      <LiquidityStrategy />
      <Roadmap />
      <Team />
    </>
  );
}
