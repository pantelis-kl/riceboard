
export type Insight = {
  id: number;
  feature: string;
  level: "big" | "minor";
  votes: { alex: number; maria: number; john: number };
  text: string;
};

export const insights: Insight[] = [
  {
    id: 1,
    feature: "Push notifications",
    level: "big",
    votes: { alex: 3, maria: 3, john: 1 },
    text: "Eleni rates the impact at 1, while Maria and Nikos say 3. Worth checking who this feature is really for.",
  },
  {
    id: 2,
    feature: "Auto-save",
    level: "big",
    votes: { alex: 1, maria: 3, john: 3 },
    text: "Maria rates the impact at 1, while Nikos and Eleni say 3. Worth checking whether she sees a different user in mind.",
  },
  {
    id: 3,
    feature: "Export to CSV",
    level: "minor",
    votes: { alex: 2, maria: 2, john: 1 },
    text: "Eleni rates the impact at 1, while Maria and Nikos say 2. A small gap, but worth a quick check.",
  },
  {
    id: 4,
    feature: "Drag & Drop",
    level: "minor",
    votes: { alex: 1, maria: 2, john: 1 },
    text: "Nikos rates the impact at 2, while Maria and Eleni say 1. A small gap that should be quick to settle.",
  },
];