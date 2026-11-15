"use client";

import { DataType } from "@/data/prioritize";
import { Dispatch, SetStateAction } from "react";

type PrioritizeCardsProps={
    updateData:DataType[],
    setFirstId:Dispatch<SetStateAction<number>>,
    firstId:number
}

export default function PrioritizeCards({updateData,setFirstId,firstId}:PrioritizeCardsProps) {
    return(
        <div className="flex flex-row flex-wrap md:grid grid-cols-2 gap-2 lg:gap-3">
          {updateData.map((u) => (
            <div key={u.id}>
              <button
                type="button"
                onClick={()=>setFirstId(u.id)}
                className={`lg:px-4 w-full h-full min-h-10 lg:py-2 px-3 py-1.5 rounded-lg border text-xs md:text-sm font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-150 cursor-pointer
                  ${firstId===u.id?"border-purple-500/50 bg-purple-500/5":"border-(--border-color) bg-(--bg-surface)"}`}
              >
                <span>{u.feature}</span>
              </button>
            </div>
          ))}
        </div>
    )
}