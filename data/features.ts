
export type FeaturesType={
    feature:string;
    description:string;
    text:string;
    component: 'upload' | 'vote' | 'ranking' | 'link' | 'prioritize' | 'insights'
}

export const features :FeaturesType[]=[
  {
    feature: "Upload",
    description:
      "Drop a CSV, TXT or Markdown file and your features are ready to vote on.",
    text: "Drag a file into the dropzone. Your features are imported as a list, one per line, ready to score.",
    component:'upload'
  },
  {
    feature: "Vote",
    description:
      "Everyone scores Reach, Impact, Confidence and Effort at the same time.",
    text: "Move the sliders and watch the RICE score update instantly. Teammates' votes appear as they happen.",
    component:'vote'
  },
  {
    feature: "Live ranking",
    description: "Every vote reorders the list in real time.",
    text: "Cards swap places as scores change, so the top priority is always the one at the top.",
    component:'ranking'
  },
  {
    feature: "Invite with a link",
    description: "Share one URL and your team joins the session instantly.",
    text: "Copy the session link and send it. Teammates join with one click and appear as live participants.",
    component:'link'
  },
  {
    feature: "Impact vs Effort",
    description: "Visualize every feature on an interactive 2x2 matrix.",
    text: "Click a point to see its name and move it with the sliders. It changes color when it crosses into another quadrant.",
    component:'prioritize'
  },
  {
    feature: "AI insights",
    description: "AI flags where your team's estimates diverge.",
    text: "After voting, AI highlights features with the widest gap in estimates and suggests what to discuss first.",
    component:'insights'
  },
];
