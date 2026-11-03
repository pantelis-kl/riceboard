
type QuadrantType = {
  quickWins: QuadrantProps;
  majorProjects: QuadrantProps;
  fillIns: QuadrantProps;
  reconsider: QuadrantProps;
};

type QuadrantProps = {
  name: string;
  color: string;
};

export function getQuadrant(impact: number, effort: number,quadrant:QuadrantType) {
  if (effort >= 5) return impact >= 5 ? quadrant.majorProjects : quadrant.reconsider;
  return impact >= 5 ? quadrant.quickWins : quadrant.fillIns;
}