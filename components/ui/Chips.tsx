
const data=[
    {name:"Reach",text:"Total audience size or customer volume reached within a timeframe"},
    {name:"Impact",text:"Value added per user (from minimal to massive)"},
    {name:"Confidence",text:"How strongly data validates that this feature will deliver expected value"},
    {name:"Effort",text:"Engineering hours and implementation complexity"}
]

export default function Chips(){

    return(
         <div className="flex flex-wrap items-center gap-2 pt-1">
            {data.map(d=>(
                <div
              className="group relative flex items-center gap-1.5 px-3 py-1 rounded-lg border border-(--border-color) bg-(--bg-surface) text-sm font-medium text-(--text-primary) shadow-sm hover:border-purple-500/50 transition-colors cursor-default"
              key={d.name}
            >
                <span className="font-bold text-purple-500">{d.name.slice(0,1)}</span>{d.name.slice(1,)}
                <div className="absolute top-full mb-2 w-60 max-w-xs p-2 rounded-xl border border-(--border-color) bg-(--bg-surface) shadow-xl text-xs opacity-0 translate-y-1 group-hover:opacity-100 transition-opacity duration-100">
                <p className="text-xs text-(--text-secondary) mt-0.5">
                  {d.text}
                </p>
              </div>
            </div>
            ))}
         </div>
    )
}