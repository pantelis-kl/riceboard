"use client";
//import icons
import { ChevronDown, ChevronUp } from "lucide-react";
//import hooks
import { useState } from "react";
//import motion
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    name: "Reach",
    text: "Total audience size or customer volume reached within a timeframe",
  },
  { name: "Impact", text: "Value added per user (from minimal to massive)" },
  {
    name: "Confidence",
    text: "How strongly data validates that this feature will deliver expected value",
  },
  { name: "Effort", text: "Engineering hours and implementation complexity" },
];

export default function Chips() {
  const [open, setOpen] = useState<number | null>(null);

  const openChip =(index: number) => setOpen(index);

  const closeChip=(index: number) =>
    setOpen(prev=> (prev===index? null : prev));

  const toggleChip=(index: number)=>
    setOpen(prev=> (prev===index ? null : index));

  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      {data.map((d, index) => (
        <motion.div
          key={d.name}
          onHoverStart={() => openChip(index)}
          onHoverEnd={() => closeChip(index)}
          className="flex flex-col rounded-lg px-3 py-1 border border-(--border-color) bg-(--bg-surface) text-sm font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 transition-colors overflow-hidden"
        >
          <button
            type="button"
            onClick={() => toggleChip(index)}
            className="flex items-center justify-between gap-2 w-full text-left cursor-pointer lg:pointer-events-none"
          >
            <span>
              <span className="font-bold text-purple-500">{d.name[0]}</span>
              {d.name.slice(1)}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-(--text-secondary) lg:hidden transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence initial={false}>
            {open===index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="max-w-xs w-32 pt-1 pb-2 border-t border-(--border-color)/50 text-xs text-(--text-secondary) leading-relaxed">
                  {d.text}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
