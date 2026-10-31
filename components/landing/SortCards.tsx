"use client";
//import transition
import { Transition } from "motion";
import { useReducedMotion } from "motion/react";
import * as motion from "motion/react-client";
//import hooks
import { useEffect, useState } from "react";

type FeaturesProps = {
  id: number;
  name: string;
  score: number;
};

export default function SortCards({ features }: { features: FeaturesProps[] }) {
  const [updatedFeatures, setUpdatedFeatures] = useState(features);
  const sortedFeatures = [...updatedFeatures].sort((a, b) => b.score - a.score);
  const reduceMotion=useReducedMotion();

  useEffect(()=>{
    const intervalId=setInterval(()=>setUpdatedFeatures(prevFeature=>shuffle(prevFeature)),2500)
    return ()=>clearInterval(intervalId)
  },[reduceMotion]);

  const clamp=(num:number,min:number,max:number)=>
     Math.max(min,Math.min(max,num))

  const shuffle=(features:FeaturesProps[])=>{
    return features.map(f =>
    Math.random() < 0.5
      ? { ...f, score: clamp(f.score + (Math.random() * 40 - 20), 8, 95) }
      : f
  )
  }

  return (
    <div className="flex flex-col gap-2 lg:py-12 w-full">
        <h3 className="text-sm text-center font-bold tracking-wide text-(--text-primary) uppercase">
        Live RICE Matrix
    </h3>
    <div className="flex items-center justify-between px-4 pb-2 mt-3 border-b border-(--border-color)/50 text-xs font-semibold text-(--text-secondary) uppercase tracking-wider">
        <p>Features</p>
        <span className="flex items-center w-40 sm:w-48 justify-end pr-8 sm:pr-10">
            <p>RICE</p>
        </span>
    </div>
      <ul className="flex flex-col gap-2 w-full">
        {sortedFeatures.map((s, index) => (
          <motion.li
            key={s.id}
            layout
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="flex items-center justify-between p-4 rounded-xl border border-(--border-color) bg-(--bg-surface) text-(--text-primary) shadow-sm hover:border-purple-500/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold px-2 whitespace-nowrap py-1 rounded-md bg-(--border-color)/30 text-(--text-secondary)">
                # {index + 1}
              </span>
              <span className="text-sm font-medium text-(--text-primary)">
                {s.name}
              </span>
            </div>
             <div className="flex items-center gap-3 w-40 sm:w-48">
                <div className="relative w-full h-2.5 bg-(--border-color)/30 rounded-full overflow-hidden">
                    <motion.div
                    initial={false}
                    animate={{ width: `${s.score}%` }}
                    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                    className="absolute top-0 left-0 h-full bg-linear-to-r from-purple-500 to-indigo-500 rounded-full"
                    />
                </div>
                <span className="text-xs font-semibold text-(--text-primary) w-8 text-right">
                    {Math.round(s.score)}
                </span>
                </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
