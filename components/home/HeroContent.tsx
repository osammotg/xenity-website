"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease },
  };
}

export default function HeroContent() {
  return (
    <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center pb-8">
      {/* Headline */}
      <motion.h1
        {...item(0.1)}
        className="text-[clamp(42px,7vw,76px)] font-medium leading-none tracking-tight text-[#1B0C25] mb-6 text-center"
      >
        Sovereign AI Infrastructure
        <br />
        Software for Europe
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        {...item(0.22)}
        className="text-[17px] text-[rgba(28,12,38,0.65)] max-w-xl mx-auto mb-8 leading-relaxed text-center"
      >
        Xinity lets European companies run generative AI fully on-premise.
        No cloud, no data leaving your walls, no regulatory exposure. Deployed in days.
      </motion.p>

    </div>
  );
}
