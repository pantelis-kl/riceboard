import { LucideIcon, Plus, FileUp, Users } from "lucide-react";

export type HowItWorks = {
  step: number;
  title: string;
  text: string;
  icon: LucideIcon;
};

export const howItWorks: HowItWorks[] = [
  {
    step: 1,
    title: "Create a session",
    text: "Sign up and start a new session. You become the host and decide which features the team will score.",
    icon: Plus
  },
  {
    step: 2,
    title: "Add your features",
    text: "Upload a file with one feature per line. They are imported instantly and ready to vote on.",
    icon: FileUp
  },
  {
    step: 3,
    title: "Share the link",
    text: "Your team joins with just a name and scores each feature live. The ranking updates with every vote, and AI points out where you disagree.",
    icon: Users
  },
];