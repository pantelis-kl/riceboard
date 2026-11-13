import { motion } from "motion/react";

export default function TypingText({text}:{text:string}){
    const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.05 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 200 },
    },
    hidden: {
      opacity: 0,
      y: 2,
    },
  };

  return (
    <motion.p
      key={text}
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-sm leading-relaxed text-(--text-secondary)"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
}