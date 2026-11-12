"use client";
//import ai insights data
import { Insight } from "@/data/insights";
import { insightsProfiles } from "@/data/profiles";

const names = ["Alex", "Maria", "John"];

export default function AiDemo() {
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
    </div>
  );
}
