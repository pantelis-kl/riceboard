"use client";

import { useState } from "react";
import PrioritizeScatter from "./PrioritizeScatter";

type DataType={
  feature:string,
  impact:number,
  effort:number
}

const data:DataType[]=[
    {feature:'Dark theme',impact:1,effort:1}
]

export default function PrioritizeSliders(){

    const [updateData,setUpdateData]=useState(data);
    const [firstFeature,setFirstFeature]=useState(data[0].feature);
    const selectedFeature=updateData.find(u=>u.feature===firstFeature)!;

    const updateScore=(key:'impact' | 'effort',value:number)=>{
        setUpdateData(prev=>prev.map(u=> ({...u, [key]:value})))
    }

    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex flex-col gap-2">
          <div
          className="flex flex-col gap-3"
          >
            <label htmlFor="impact" className="text-(--text-primary)">
            Impact : <span className="text-(--accent-primary)">{selectedFeature.impact}</span>
          </label>
        <input 
          type="range" 
          id="impact"
          min={1} 
          max={10} 
          step={1}
          value={selectedFeature.impact}
          onChange={e=>updateScore('impact',Number(e.target.value))}
          className="w-40 lg:w-50 accent-purple-500 cursor-pointer bg-(--border-color) rounded-lg h-2"
        />
          </div>
          <div
          className="flex flex-col gap-3"
          >
            <label htmlFor="effort" className="text-(--text-primary)">
            Effort : <span className="text-(--accent-primary)">{selectedFeature.effort}</span>
          </label>
        <input 
          type="range" 
          id="effort"
          min={1} 
          max={10} 
          step={1}
          value={selectedFeature.effort}
          onChange={e=>updateScore('effort',Number(e.target.value))}
          className="w-40 lg:w-50 accent-purple-500 cursor-pointer bg-(--border-color) rounded-lg h-2"
        />
          </div>
      </div>
      <PrioritizeScatter data={updateData}/>
      </div>
    )
}