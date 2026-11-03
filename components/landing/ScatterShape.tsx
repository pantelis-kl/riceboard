//import useReduceMotion for dot animation
import { getQuadrant } from "@/utils/quadrants";
import { motion, useReducedMotion } from "motion/react";
//import types
import { Dispatch, SetStateAction } from "react";

type DataType = {
  id: number;
  feature: string;
  impact: number;
  effort: number;
  groupIndex?: number;
  groupSize?: number;
  groupKey?: string | null;
};

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

type ScatterShapeProps = {
  cx?: number;
  cy?: number;
  payload?: DataType;
  firstId: number;
  setFirstId: Dispatch<SetStateAction<number>>;
  setClickedPoint: Dispatch<SetStateAction<DataType | null>>;
  quadrant: QuadrantType;
  hoveredGroup: string | null;
  enterGroup: (key: string) => void;
  leaveGroup: () => void;
};

export default function ScatterShape({
  cx,
  cy,
  payload,
  firstId,
  setFirstId,
  setClickedPoint,
  quadrant,
  hoveredGroup,
  enterGroup,
  leaveGroup,
}: ScatterShapeProps) {
  const reduceMotion = useReducedMotion() ?? false;
  if (!cx || !cy || !payload) return null;
  const color = getQuadrant(payload, quadrant).color;
  const selectedId = payload.id === firstId;
  const spring = reduceMotion
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 140, damping: 20 };
  const size = payload.groupSize ?? 1;
  const index = payload.groupIndex ?? 0;
  const spread = size > 1 && hoveredGroup === payload.groupKey;
  const dir = payload.effort < 3 ? 1 : -1;
  const x = cx + (spread ? dir * index * 26 : 0);
  const y = cy;
  return (
    <g
      data-dot
      onMouseEnter={() => {
        setClickedPoint(null);
        if (payload.groupKey) enterGroup(payload.groupKey);
      }}
      onMouseLeave={leaveGroup}
      onClick={() => {
        setFirstId(payload.id);
        setClickedPoint(payload);
        if (payload.groupKey) enterGroup(payload.groupKey);
      }}
      style={{ cursor: "pointer" }}
    >
      {selectedId && (
        <motion.circle
          r={10}
          fill="none"
          stroke={color}
          strokeOpacity={0.5}
          strokeWidth={2}
          initial={false}
          animate={{ cx: x, cy: y, fill: color }}
          transition={spring}
        />
      )}
      <motion.circle
        r={7}
        fill={color}
        initial={false}
        animate={{ cx: x, cy, fill: color }}
        transition={spring}
      />
    </g>
  );
}
