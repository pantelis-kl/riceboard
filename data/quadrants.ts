
export const quadrant={
   quickWins:{name:"Quick wins",color:"var(--quad-quick)",hint: "High impact, low effort. Start here."},
   majorProjects:{name:"Major projects",color:"var(--quad-major)",hint: "High impact, high effort. Plan these carefully."},
   fillIns:{name:"Fill in's",color:"var(--quad-fill)",hint: "Low impact, low effort. Do them if there's time."},
   reconsider:{name:"Reconsider",color:"var(--quad-rec)",hint: "Low impact, high effort. Think twice."}
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
  hint:string;
};