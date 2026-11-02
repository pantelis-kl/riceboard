"use client";

import { useState } from "react";
import PrioritizeScatter from "./PrioritizeScatter";

type DataType = {
  id:number
  feature: string;
  impact: number;
  effort: number;
};

const data: DataType[] = [
  {id:1, feature: "Dark theme", impact: 8, effort: 2 },
  {id:2,  feature: "Export to CSV", impact: 4, effort: 8 },
  {id:3,  feature: "Push notifications", impact: 9, effort: 9 },
  {id:4,  feature: "Drag & Drop", impact: 4, effort: 4 },
];

export default function PrioritizeSliders() {
  const [updateData, setUpdateData] = useState(data);
  const [firstId, setFirstId] = useState(data[0].id);
  const selectedId = updateData.find((u) => u.id === firstId)!;

  const updateScore = (key: "impact" | "effort", value: number) => {
    setUpdateData((prev) => prev.map((u) => (firstId === u.id ? { ...u, [key]: value } : u)));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="inline lg:hidden">
        <PrioritizeScatter data={updateData} />
      </div>
      <div className="flex flex-row gap-5 lg:gap-16 items-center justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <label htmlFor="impact" className="text-(--text-primary)">
              Impact :{" "}
              <span className="text-(--accent-primary)">
                {selectedId.impact}
              </span>
            </label>
            <input
              type="range"
              id="impact"
              min={1}
              max={10}
              step={1}
              value={selectedId.impact}
              onChange={(e) => updateScore("impact", Number(e.target.value))}
              className="w-40 lg:w-50 accent-purple-500 cursor-pointer bg-(--border-color) rounded-lg h-2"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="effort" className="text-(--text-primary)">
              Effort :{" "}
              <span className="text-(--accent-primary)">
                {selectedId.effort}
              </span>
            </label>
            <input
              type="range"
              id="effort"
              min={1}
              max={10}
              step={1}
              value={selectedId.effort}
              onChange={(e) => updateScore("effort", Number(e.target.value))}
              className="w-40 lg:w-50 accent-purple-500 cursor-pointer bg-(--border-color) rounded-lg h-2"
            />
          </div>
        </div>
        <div className="flex flex-row flex-wrap lg:grid grid-cols-2 gap-2 lg:gap-3">
          {updateData.map((u) => (
            <div key={u.id}>
              <button
                type="button"
                onClick={()=>setFirstId(u.id)}
                className="lg:px-4 w-full h-full min-h-10 lg:py-2 px-3 py-1.5 rounded-lg border border-(--border-color) bg-(--bg-surface) text-xs font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-150 cursor-pointer"
              >
                <span>{u.feature}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:inline">
        <PrioritizeScatter data={updateData} />
      </div>
    </div>
  );
}
