
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

type DataType={
   id?: number;
  feature?: string;
  impact: number;
  effort: number;
}

export function getQuadrant({ effort, impact }: Pick<DataType, 'effort' | 'impact'>,quadrant:QuadrantType) {
  if (effort >= 5) return impact >= 5 ? quadrant.majorProjects : quadrant.reconsider;
  return impact >= 5 ? quadrant.quickWins : quadrant.fillIns;
}