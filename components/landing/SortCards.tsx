"use client";
//import transition
import { Transition } from "motion";
import * as motion from 'motion/react-client';
import { useState } from "react";
//import 

type FeaturesProps={
    id:number,
    name:string,
    score:number
}

export default function SortCards({features}:{features:FeaturesProps[]}){

    const [updatedFeatures,setUpdatedFeatures]=useState(features);
    const sortedFeatures=updatedFeatures.sort((a,b)=>b.score-a.score);

    return(
        <div
        className="flex flex-col"
        >
        <ul>
            {sortedFeatures.map((s,index)=>(
                <motion.li
                key={s.id}
                >

                </motion.li>
            ))}
        </ul>
        </div>
    )
}