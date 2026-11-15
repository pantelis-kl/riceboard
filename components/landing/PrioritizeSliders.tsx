"use client";
//import hooks
import { useState } from "react";
//import components
import PrioritizeScatter from "./PrioritizeScatter";
import RiceRange from "./RiceRange";
//import features data
import {data} from '@/data/prioritize';
import { getQuadrant } from "@/utils/quadrants";
import { quadrant } from "@/data/quadrants";

export default function PrioritizeSliders() {
  const [updateData, setUpdateData] = useState(data);
  const [firstId, setFirstId] = useState(data[0].id);
  const selectedId = updateData.find((u) => u.id === firstId)!;
  const activeQuadrant=getQuadrant(selectedId,quadrant)

  const updateScore = (key: "impact" | "effort", value: number) => {
    setUpdateData((prev) => prev.map((u) => (firstId === u.id ? { ...u, [key]: value } : u)));
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[23rem_minmax(0,1fr)] lg:gap-10">
      <div className="order-1 lg:order-2">
        <PrioritizeScatter
          data={updateData}
          firstId={firstId}
          setFirstId={setFirstId}
        />
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 order-2 lg:order-1">
        <div className="flex flex-col gap-1">
          <p className="text-xs text-(--text-secondary)">Selected feature</p>
          <div className="flex items-center justify-between gap-3">
            <h3 className="min-w-0 truncate text-sm font-semibold text-(--text-primary)">
              {selectedId.feature}
            </h3>
            <span
              style={{
                backgroundColor: `color-mix(in srgb, ${activeQuadrant.color} 14%, transparent)`,
                borderColor: `color-mix(in srgb, ${activeQuadrant.color} 40%, transparent)`,
              }}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium text-(--text-primary) transition-colors duration-300"
            >
              <span
                style={{ backgroundColor: activeQuadrant.color }}
                className="size-1.5 rounded-full"
              />
              {activeQuadrant.name}
            </span>
          </div>
          <p className="text-xs text-(--text-secondary)">{activeQuadrant.hint}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label
              htmlFor="impact"
              className="text-(--text-secondary) text-sm font-medium"
            >
              Impact
            </label>
            <span className="text-(--text-primary) text-sm font-semibold tabular-nums">
              {selectedId.impact}
            </span>
          </div>
          <RiceRange
            id="impact"
            min={0}
            max={10}
            step={1}
            value={selectedId.impact}
            onChange={(e) => updateScore("impact", Number(e))}
            className="rice-range w-full h-1.5 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-(--text-secondary)">
            <p>Low</p>
            <p>High</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <label
              htmlFor="effort"
              className="text-(--text-secondary) text-sm font-medium"
            >
              Effort
            </label>
            <span className="text-(--text-primary) text-sm font-semibold tabular-nums">
              {selectedId.effort}
            </span>
          </div>
          <RiceRange
            id="effort"
            min={0}
            max={10}
            step={1}
            value={selectedId.effort}
            onChange={(e) => updateScore("effort", Number(e))}
            className="rice-range w-full h-1.5 rounded-lg cursor-pointer"
          />
          <div className="flex justify-between text-xs text-(--text-secondary)">
            <p>Low</p>
            <p>High</p>
          </div>
        </div>
      </div>
    </div>
  );
}
