
export const quadrant={
   quickWins:{name:"Quick wins",color:"var(--quad-quick)"},
   majorProjects:{name:"Major projects",color:"var(--quad-major)"},
   fillIns:{name:"Fill in's",color:"var(--quad-fill)"},
   reconsider:{name:"Reconsider",color:"var(--quad-rec)"}
}

export type QuadrantType = {
  quickWins: QuadrantProps;
  majorProjects: QuadrantProps;
  fillIns: QuadrantProps;
  reconsider: QuadrantProps;
};

type QuadrantProps = {
  name: string;
  color: string;
};