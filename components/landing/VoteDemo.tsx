"use client";
//import hooks
import { useState } from "react";
//import icons
import { ArrowRight } from "lucide-react";

const demoData=[
    {id:1, feature: "Dark theme",reach:2300, impact:1.5 , confidence:60,effort: 6 },
    {id:2,  feature: "Export to CSV",reach:1200, impact:2 , confidence:90,effort: 2},
    {id:3,  feature: "Push notifications", reach:4000, impact:3 , confidence:100,effort: 7 },
    {id:4,  feature: "Drag & Drop", reach:3700, impact:1 , confidence:50,effort: 4 },
    {id:5,  feature: "Auto save", reach:2200, impact:0.5 , confidence:50,effort: 9 }
]

export default function VoteDemo() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [updatedData,setUpdateData]=useState(demoData);
  const selectedFeature=updatedData[activeFeature]
  const rice=Number(Math.round((selectedFeature.reach*selectedFeature.impact*(selectedFeature.confidence)/100)/selectedFeature.effort))

  const updateRice=(key:'reach' | 'impact' | 'confidence' | 'effort',value:number)=>{
     setUpdateData((prev) => prev.map((u,index) => (activeFeature === index ? { ...u, [key]: value } : u)));
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-(--text-primary) tracking-tight">
          {demoData[activeFeature].feature}
        </h3>
        <span className="text-xs font-medium text-(--text-secondary) bg-(--bg-surface) border border-(--border-color) px-2.5 py-0.5 rounded-full">
          Feature {activeFeature + 1} of {demoData.length}
        </span>
      </div>
      <div className="flex flex-row items-center gap-2 text-xs text-(--text-secondary)">
        <span className="w-2 h-2 rounded-full bg-emerald-500" />
        <p>3 voting now</p>
      </div>
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="reach"
              className="text-sm font-medium text-(--text-primary)"
            >
              Reach
            </label>
            <span className="text-xs font-semibold text-(--text-primary)">
              {selectedFeature.reach.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            id="reach"
            min={100}
            max={5000}
            step={100}
            value={selectedFeature.reach}
            onChange={(e) => updateRice("reach", Number(e.target.value))}
            className="w-full h-1.5 bg-(--border-color) rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-(--text-secondary)">
            <p>Few users</p>
            <p>lots of users</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="impact"
              className="text-sm font-medium text-(--text-secondary)"
            >
              Impact
            </label>
            <span className="text-xs font-semibold text-(--text-primary)">
              {selectedFeature.impact.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            id="impact"
            min={1}
            max={3}
            step={0.5}
            value={selectedFeature.impact}
            onChange={(e) => updateRice("impact", Number(e.target.value))}
            className="w-full h-1.5 bg-(--border-color) rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-(--text-secondary)">
            <p>Minimal</p>
            <p>Massive</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="confidence"
              className="text-sm font-medium text-(--text-secondary)"
            >
              Confidence
            </label>
            <span className="text-xs font-semibold text-(--text-primary)">
              {selectedFeature.confidence.toLocaleString()}%
            </span>
          </div>
          <input
            type="range"
            id="confidence"
            min={50}
            max={100}
            step={5}
            value={selectedFeature.confidence}
            onChange={(e) => updateRice("confidence", Number(e.target.value))}
            className="w-full h-1.5 bg-(--border-color) rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-(--text-secondary)">
            <p>low</p>
            <p>high</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <label
              htmlFor="effort"
              className="text-sm font-medium text-(--text-secondary)"
            >
              Effort
            </label>
            <span className="text-xs font-semibold text-(--text-primary)">
              {selectedFeature.effort.toLocaleString()}
            </span>
          </div>
          <input
            type="range"
            id="effort"
            min={1}
            max={12}
            step={1}
            value={selectedFeature.effort}
            onChange={(e) => updateRice("effort", Number(e.target.value))}
            className="w-full h-1.5 bg-(--border-color) rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-xs text-(--text-secondary)">
            <p>Few days</p>
            <p>Many months</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg border border-(--border-color) bg-(--bg-primary) px-4 py-3">
        <span className="text-sm text-(--text-secondary)">RICE score</span>
        <span className="text-2xl font-semibold tabular-nums text-(--text-primary)">
          {rice.toLocaleString()}
        </span>
      </div>
      <button>
        Next Feature
      </button>
    </div>
  );
}
