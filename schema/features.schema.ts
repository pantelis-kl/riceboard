
export type DataType={
  id:number
  feature: string;
  impact: number;
  effort: number;
  groupIndex?: number;
  groupSize?: number;
  groupKey?: string | null;
}

export const data: DataType[] = [
  {id:1, feature: "Dark theme", impact: 8, effort: 2 },
  {id:2,  feature: "Export to CSV", impact: 4, effort: 8 },
  {id:3,  feature: "Push notifications", impact: 9, effort: 9 },
  {id:4,  feature: "Drag & Drop", impact: 4, effort: 4 },
];