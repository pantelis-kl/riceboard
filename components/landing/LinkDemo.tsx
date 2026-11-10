"use client";
//import icons
import { Link, Check,X } from "lucide-react";
//import hooks
import { useState } from "react";
import { motion } from "motion/react";

const profiles=[
    {id:1,name:'You',color:"#3B82F6"},
    {id:2,name:'Maria',color:"#8B5CF6"},
    {id:3,name:'John',color:"#F59E0B"}
];

const link = "Riceboard.com/s/a3h01s";
export default function LinkDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
    } catch {}
  };

  const close=()=>{
    setCopied(false);
  }

  return (
    <div className="w-full flex flex-col gap-2 p-4 rounded-2xl border border-(--border-color) bg-(--bg-surface) shadow-sm">
      <button
        className="ml-auto text-(--text-primary) cursor-pointer hover:text-red-500"
        onClick={close}
      >
        <X className="size-4 shrink-0" />
      </button>
      <span className="text-xs font-semibold tracking-wider text-(--text-secondary)">
        Session link
      </span>
      <div className="flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--bg-primary) p-1.5 pl-3">
        <Link className="size-4 shrink-0 text-(--text-secondary)" />
        <span
          title={link}
          className="min-w-0 flex-1 truncate text-sm text-(--text-secondary)"
        >
          {link}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex min-w-24 shrink-0 items-center justify-center gap-1.5 rounded-md bg-(--accent-primary) px-3 py-1.5 text-sm font-medium text-white cursor-pointer transition-opacity hover:opacity-90"
        >
          {copied ? (
            <>
              Copied <Check className="size-4 shrink-0" />
            </>
          ) : (
            "Copy"
          )}
        </button>
      </div>
      <p className="text-xs text-(--text-secondary)">
        Participants join with just a name. No account needed.
      </p>
      {copied && (
        <>
          <div className="flex flex-col gap-3 p-3 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-(--text-primary)">
              Host
            </span>
            <motion.div
              initial={{ opacity: 0, y: -24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 22,
                delay: 0.1,
              }}
              className="w-full bg-(--bg-surface) items-center p-2 rounded-2xl border border-(--border-color) shadow-sm flex flex-row gap-2"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#10B981] text-white font-semibold text-sm shadow-sm shrink-0">
                A
              </div>
              <div className="w-full flex justify-between">
                <span className="text-sm font-semibold text-(--text-primary)">
                  Alex
                </span>
                <span className="text-xs flex items-center gap-1 text-(--text-secondary)">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Joined
                </span>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col gap-4 p-3 w-full">
            <span className="text-xs font-semibold uppercase tracking-wider text-(--text-primary)">
              Participants
            </span>
            <ul className="flex flex-col gap-2">
              {profiles.map((p, index) => (
                <motion.li
                  key={p.id}
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                    delay: 0.8 + index * 0.6,
                  }}
                  className="w-full bg-(--bg-surface) items-center p-2 rounded-2xl border border-(--border-color) shadow-sm flex flex-row gap-2"
                >
                  <div
                    style={{ backgroundColor: p.color }}
                    className="flex items-center justify-center w-10 h-10 rounded-full text-white font-semibold text-sm shadow-sm shrink-0"
                  >
                    {p.name.slice(0, 1)}
                  </div>
                  <div className="w-full flex justify-between">
                    <span className="text-sm font-semibold text-(--text-primary)">
                      {p.name}
                    </span>
                    <span className="text-xs flex items-center gap-1 text-(--text-secondary)">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Joined
                    </span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
