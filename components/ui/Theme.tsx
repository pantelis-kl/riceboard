"use client";
//import hooks
import { useState,startTransition } from "react";
//import spring animation
import { spring } from "motion";
//import animate presence
import { AnimateView } from "motion/react-animate-view";

export default function Theme(){
    const [dark,setDark]=useState(false);

    return(
        <div
        className="flex justify-center items-center w-full h-full"
        >
            <AnimateView
            transition={{
                type:spring,
                visualDuration:0.2
            }}>
                <button
                onClick={()=>startTransition(()=>setDark(!dark))}
                >

                </button>
            </AnimateView>
        </div>
    )
}