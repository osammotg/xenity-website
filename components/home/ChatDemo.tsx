"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const CHAR_SPEED = 22;

const messages = [
  { role: "user" as const,  text: "Is our AI stack actually EU-compliant?",                          showAt: 900  },
  { role: "ai"   as const,  text: "It is — when it runs on your servers, under your jurisdiction.",  showAt: 3700 },
  { role: "user" as const,  text: "Why does this matter?",                                           showAt: 7900 },
];

function TypewriterText({ text, active }: { text: string; active: boolean }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, CHAR_SPEED);
    return () => clearInterval(id);
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {active ? displayed : ""}
      {active && !done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[14px] bg-[#1B0C25] ml-0.5 align-middle"
        />
      )}
    </>
  );
}

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-[#9B6FC8]"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

const avatarStyle = {
  background: "linear-gradient(143deg, rgb(128,169,252) 0%, rgb(211,123,255) 31%, rgb(252,171,131) 70%, rgb(255,73,212) 100%)",
  boxShadow: "inset 0px -1.6px 3.2px 0px rgba(255,255,255,0.2), inset 0px 0.8px 0.8px 0px rgba(255,255,255,0.25)",
};
const bubbleStyle = {
  backgroundColor: "rgba(255,255,255,0.9)",
  borderRadius: "8px",
  boxShadow: "0px 5px 20px 0px rgba(0,0,0,0.06)",
};

function UserAvatar() {
  return (
    <div className="w-8 h-8 shrink-0 rounded-[5.33px] overflow-hidden" style={avatarStyle}>
      <Image src="/images/laura-avatar.png" width={32} height={32} alt="Laura Janzso" className="w-full h-full object-cover" />
    </div>
  );
}

function AiAvatar() {
  return (
    <div className="w-[39px] h-[39px] shrink-0">
      <Image src="/images/xinity-logo-chat.png" width={39} height={39} alt="Xinity AI" className="w-full h-full object-contain" />
    </div>
  );
}

export default function ChatDemo() {
  const [visible, setVisible] = useState({ msg1: false, typing: false, msg2: false, msg3: false, label: false });

  useEffect(() => {
    const t = [
      setTimeout(() => setVisible(v => ({ ...v, msg1: true })),                        messages[0].showAt),
      setTimeout(() => setVisible(v => ({ ...v, typing: true })),                      messages[1].showAt - 700),
      setTimeout(() => setVisible(v => ({ ...v, typing: false, msg2: true })),         messages[1].showAt),
      setTimeout(() => setVisible(v => ({ ...v, msg3: true })),                        messages[2].showAt),
      setTimeout(() => setVisible(v => ({ ...v, label: true })),                       messages[2].showAt + 1400),
    ];
    return () => t.forEach(clearTimeout);
  }, []);

  const fade = (show: boolean) => ({
    opacity: show ? 1 : 0,
    transition: { duration: 0.45, ease: "easeOut" } as const,
  });

  const bubbleClass = "max-w-[364px] px-3 py-3 text-[15px] font-medium leading-relaxed text-[#1B0C25]";

  return (
    // Fixed min-height pre-reserves all space — no layout shift as messages appear
    <div className="w-full max-w-[580px] mx-auto" style={{ minHeight: 260 }}>
      <div className="flex flex-col gap-4">

        {/* Message 1 — user */}
        <motion.div animate={fade(visible.msg1)} initial={{ opacity: 0 }} className="flex flex-row-reverse items-start gap-[10px]">
          <UserAvatar />
          <div className={bubbleClass} style={bubbleStyle}>
            <TypewriterText text={messages[0].text} active={visible.msg1} />
          </div>
        </motion.div>

        {/* Typing indicator — occupies fixed space, just fades in/out */}
        <motion.div animate={fade(visible.typing)} initial={{ opacity: 0 }} className="flex flex-row items-start gap-[10px]">
          <AiAvatar />
          <div style={bubbleStyle}><TypingIndicator /></div>
        </motion.div>

        {/* Message 2 — AI (replaces typing indicator row via opacity, same space) */}
        <motion.div
          animate={{ opacity: visible.msg2 ? 1 : 0, marginTop: visible.msg2 ? 0 : -68 }}
          initial={{ opacity: 0, marginTop: -68 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex flex-row items-start gap-[10px]"
        >
          <AiAvatar />
          <div className={bubbleClass} style={bubbleStyle}>
            <TypewriterText text={messages[1].text} active={visible.msg2} />
          </div>
        </motion.div>

        {/* Message 3 — user follow-up */}
        <motion.div animate={fade(visible.msg3)} initial={{ opacity: 0 }} className="flex flex-row-reverse items-start gap-[10px]">
          <UserAvatar />
          <div className={bubbleClass} style={bubbleStyle}>
            <TypewriterText text={messages[2].text} active={visible.msg3} />
          </div>
        </motion.div>

        {/* Label */}
        <motion.div animate={fade(visible.label)} initial={{ opacity: 0 }} className="flex items-center gap-2 mt-1">
          <div className="w-8 h-8 shrink-0 rounded-[5.33px] overflow-hidden" style={avatarStyle}>
            <Image src="/images/laura-avatar.png" width={32} height={32} alt="Laura Janzso" className="w-full h-full object-cover" />
          </div>
          <span className="text-[12px] text-[rgba(27,12,37,0.5)]">
            Laura Janzso, Marketing —{" "}
            <span className="underline underline-offset-2">Why we built this</span>
          </span>
        </motion.div>

      </div>
    </div>
  );
}
