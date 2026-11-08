
export type DemoDataType={
    id:number,
    feature:string,
    reach:number,
    impact:number,
    confidence:number,
    effort:number
}

export const demoData:DemoDataType[]=[
    {id:1, feature: "Dark theme",reach:2300, impact:1.5 , confidence:60,effort: 6 },
    {id:2,  feature: "Export to CSV",reach:1200, impact:2 , confidence:90,effort: 2},
    {id:3,  feature: "Push notifications", reach:4000, impact:3 , confidence:100,effort: 7 },
    {id:4,  feature: "Drag & Drop", reach:3700, impact:1 , confidence:50,effort: 4 },
    {id:5,  feature: "Auto save", reach:2200, impact:0.5 , confidence:50,effort: 9 }
]