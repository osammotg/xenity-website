"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EU_AI_ACT_DATE = new Date("2026-08-02T00:00:00Z");

function getTimeLeft() {
  const now = new Date();
  const diff = EU_AI_ACT_DATE.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
}

function Segment({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-[64px] md:h-[80px] w-[56px] md:w-[72px] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: -32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 32, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute text-5xl md:text-[64px] font-extrabold text-[#1B0C25] tabular-nums leading-none"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[11px] text-[rgba(27,12,37,0.45)] uppercase tracking-widest mt-1">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <span className="text-3xl md:text-4xl font-light text-[rgba(27,12,37,0.25)] pb-4">
      :
    </span>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center gap-3 md:gap-5">
      <Segment value={timeLeft.days} label="Days" />
      <Colon />
      <Segment value={timeLeft.hours} label="Hours" />
      <Colon />
      <Segment value={timeLeft.minutes} label="Minutes" />
      <Colon />
      <Segment value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}
