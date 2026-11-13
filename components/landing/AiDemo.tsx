"use client";
//import ai insights data
import { insights } from "@/data/insights";
import { insightsProfiles } from "@/data/profiles";
//import hooks
import { useState } from "react";

const cellStyles = {
  none: "bg-(--border-color)/40 text-(--text-secondary) border-transparent",
  minor:
    "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30",
  big: "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30",
} as const;

export default function AiDemo() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-col gap-0.5">
        <h3 className="text-lg font-semibold tracking-tight text-(--text-primary)">
          Impact
        </h3>
        <p className="text-xs text-(--text-secondary)">
          Rated from 1 (minimal) to 3 (massive)
        </p>
      </div>
      <div className="grid w-full items-center gap-1.5 sm:gap-2 grid-cols-[minmax(0,1fr)_repeat(3,2rem)_3.5rem] sm:grid-cols-[minmax(0,1fr)_repeat(3,2.75rem)_5.25rem] px-2 pb-1.5 text-xs text-(--text-secondary)">
        <span>Features</span>
        {insightsProfiles.map((p) => (
          <div
            key={p.id}
            title={p.name}
            aria-label={p.name}
            style={{ backgroundColor: p.color }}
            className="mx-auto flex size-6 items-center justify-center rounded-full text-[11px] font-semibold text-white shadow-sm sm:size-7 sm:text-xs"
          >
            {p.name[0]}
          </div>
        ))}
        <span className="justify-self-end">
          <span>Gap</span>
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        {insights.map((i, index) => (
          <button
            key={i.id}
            onClick={() => setActive(index)}
            className={`group grid w-full items-center gap-1.5 sm:gap-2 grid-cols-[minmax(0,1fr)_repeat(3,2rem)_3.5rem] sm:grid-cols-[minmax(0,1fr)_repeat(3,2.75rem)_5.25rem] min-h-11 rounded-xl px-3 text-left border hover:border-purple-500/40 hover:bg-(--bg-surface)/80 transition-all cursor-pointer shadow-xs
              ${active === index ? "border-purple-500/40 bg-(--bg-surface)/80" : "border-(--border-color) bg-(--bg-surface)"}`}
          >
            <span
              className={`text-sm font-medium truncate group-hover:text-purple-400 transition-colors
            ${active === index ? "text-purple-400" : "text-(--text-primary)"}`}
            >
              {i.feature}
            </span>
            <div
              className={`flex size-7 items-center justify-center justify-self-center rounded-lg border font-mono text-xs font-semibold transition-colors sm:size-8 ${cellStyles[i.votes.alex.level]}`}
            >
              {i.votes.alex.rank}
            </div>
            <div
              className={`flex size-7 items-center justify-center justify-self-center rounded-lg border font-mono text-xs font-semibold transition-colors sm:size-8 ${cellStyles[i.votes.maria.level]}`}
            >
              {i.votes.maria.rank}
            </div>
            <div
              className={`flex size-7 items-center justify-center justify-self-center rounded-lg border font-mono text-xs font-semibold transition-colors sm:size-8 ${cellStyles[i.votes.john.level]}`}
            >
              {i.votes.john.rank}
            </div>
            <div className="hidden lg:flex items-center justify-self-end">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize border ${
                  i.gap === "minor"
                    ? "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
                    : "bg-red-500/15 text-red-700 dark:text-red-400 border-red-500/30"
                }`}
              >
                {i.gap}
              </span>
            </div>
            <span
              title={i.gap === "minor" ? "Minor gap" : "Big gap"}
              className={`block size-2.5 justify-self-end rounded-full lg:hidden ${
                i.gap === "minor" ? "bg-amber-500" : "bg-red-500"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
