
export type FeaturesType={
    id:number;
    feature:string;
    description:string;
    text:string;
    component?: 'upload' | 'vote' | 'ranking' | 'link' | 'prioritize' | 'insights'
}

export const features :FeaturesType[]=[
  {
    id:1,
    feature: "Upload",
    description:
      "Drop a CSV, TXT or Markdown file and your features are ready to vote on.",
    text: "Drag a file into the dropzone. Your features are imported as a list, one per line, ready to score.",
    component:'upload'
  },
  {
    id:2,
    feature: "Vote",
    description:
      "Everyone scores Reach, Impact, Confidence and Effort at the same time.",
    text: "Move the sliders and watch the RICE score update instantly. Teammates' votes appear as they happen.",
    component:'vote'
  },
  {
    id:3,
    feature: "Live ranking",
    description: "Every vote reorders the list in real time.",
    text: "Cards swap places as scores change, so the top priority is always the one at the top.",
    component:'ranking'
  },
  {
    id:4,
    feature: "Invite with a link",
    description: "Share one URL and your team joins the session instantly.",
    text: "Copy the session link and send it. Teammates join with one click and appear as live participants.",
    component:'link'
  },
  {
    id:5,
    feature: "Impact vs Effort",
    description: "Visualize every feature on an interactive 2x2 matrix.",
    text: "Every feature is plotted by impact and effort. Hover or tap a point to see its name, and spot your quick wins at a glance.",
    component:'prioritize'
  },
  {
    id:6,
    feature: "AI insights",
    description: "AI flags where your team's estimates diverge.",
    text: "After voting, AI highlights features with the widest gap in estimates and suggests what to discuss first.",
    component:'insights'
  },
];

export const featuresScore = [
  { id: 1, name: "Dark theme", score: 60 },
  { id: 2, name: "Export to CSV", score: 53 },
  { id: 3, name: "Push notifications", score: 48 },
  { id: 4, name: "Auto-save", score: 37 },
  { id: 5, name: "Drag & Drop", score: 33 },
];