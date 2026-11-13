
export type Insight = {
  id: number;
  feature: string;
  gap: "big" | "minor";
  votes: { alex: Vote; maria: Vote; john: Vote };
  text: string;
};

export type Vote={
   rank:number,level:"none" | "minor" | "big"
}

export const insights: Insight[] = [
  {
    id: 1,
    feature: "Push notifications",
    gap: "big",
    votes: {
      alex: { rank: 3, level: "none" },
      maria: { rank: 3, level: "none" },
      john: { rank: 1, level: "big" },
    },
    text: "John rates the impact at 1, while Maria and Alex say 3. Worth checking who this feature is really for.",
  },
  {
    id: 2,
    feature: "Auto-save",
    gap: "big",
    votes: {
      alex: { rank: 1, level: "big" },
      maria: { rank: 3, level: "none" },
      john: { rank: 3, level: "none" },
    },
    text: "Alex rates the impact at 1, while Maria and John say 3. Worth checking whether she sees a different user in mind.",
  },
  {
    id: 3,
    feature: "Export to CSV",
    gap: "minor",
    votes: {
      alex: { rank: 2, level: "none" },
      maria: { rank: 2, level: "none" },
      john: { rank: 1, level: "minor" },
    },
    text: "John rates the impact at 1, while Maria and Alex say 2. A small gap, but worth a quick check.",
  },
  {
    id: 4,
    feature: "Drag & Drop",
    gap: "minor",
    votes: {
      alex: { rank: 1, level: "none" },
      maria: { rank: 2, level: "minor" },
      john: { rank: 1, level: "none" },
    },
    text: "Maria rates the impact at 2, while Alex and John say 1. A small gap that should be quick to settle.",
  },
];