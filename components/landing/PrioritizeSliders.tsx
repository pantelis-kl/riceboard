"use client";
//import hooks
import { useState } from "react";
//import components
import PrioritizeScatter from "./PrioritizeScatter";
//import features data
import {data} from '@/data/prioritize';
import RiceRange from "./RiceRange";

export default function PrioritizeSliders() {
  const [updateData, setUpdateData] = useState(data);
  const [firstId, setFirstId] = useState(data[0].id);
  const selectedId = updateData.find((u) => u.id === firstId)!;

  const updateScore = (key: "impact" | "effort", value: number) => {
    setUpdateData((prev) => prev.map((u) => (firstId === u.id ? { ...u, [key]: value } : u)));
  };

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-6">
      <div className="inline lg:hidden">
        <PrioritizeScatter data={updateData} firstId={firstId} setFirstId={setFirstId}/>
      </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-3">
            <label htmlFor="impact" className="text-(--text-primary)">
              Impact :{" "}
              <span className="text-(--accent-primary)">
                {selectedId.impact}
              </span>
            </label>
            <RiceRange
            id="impact"
            min={0}
            max={10}
            step={1}
            value={selectedId.impact}
            onChange={e=>updateScore('impact',Number(e))}
            className="rice-range w-full h-1.5 rounded-lg cursor-pointer"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="effort" className="text-(--text-primary)">
              Effort :{" "}
              <span className="text-(--accent-primary)">
                {selectedId.effort}
              </span>
            </label>
            <RiceRange
            id="effort"
            min={0}
            max={10}
            step={1}
            value={selectedId.effort}
            onChange={e=>updateScore('effort',Number(e))}
            className="rice-range w-full h-1.5 rounded-lg cursor-pointer"
            />

          </div>
        </div>
      <div className="hidden lg:inline">
        <PrioritizeScatter data={updateData} firstId={firstId} setFirstId={setFirstId}/>
      </div>
    </div>
  );
}
