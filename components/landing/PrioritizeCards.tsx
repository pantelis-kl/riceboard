"use client";
//import data and type
import { DataType } from "@/data/prioritize";
import { quadrant } from "@/data/quadrants";
//import utils
import { getQuadrant } from "@/utils/quadrants";
//import state types
import { Dispatch, SetStateAction } from "react";

type PrioritizeCardsProps = {
  updateData: DataType[];
  setFirstId: Dispatch<SetStateAction<number>>;
  firstId: number;
};

export default function PrioritizeCards({
  updateData,
  setFirstId,
  firstId,
}: PrioritizeCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
      {updateData.map((u) => {
        const q = getQuadrant(u, quadrant);
        const selected = firstId === u.id;

        return (
          <button
            key={u.id}
            type="button"
            onClick={() => setFirstId(u.id)}
            aria-pressed={selected}
            className={`flex min-h-10 min-w-0 lg:w-full cursor-pointer items-center gap-2 rounded-lg border px-3 py-1.5 text-left text-xs font-medium text-(--text-primary) shadow-sm transition-colors duration-150 sm:text-sm lg:px-4 lg:py-2 ${
              selected
                ? "border-purple-500/50 bg-purple-500/5"
                : "border-(--border-color) bg-(--bg-surface) hover:border-purple-500/50 hover:bg-purple-500/5"
            }`}
          >
            <span
              style={{ backgroundColor: q.color }}
              className="size-2 shrink-0 rounded-full"
            />
            <span className="truncate">{u.feature}</span>
          </button>
        );
      })}
    </div>
  );
}
