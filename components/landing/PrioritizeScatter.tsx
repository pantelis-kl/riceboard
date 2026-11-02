//import scatter chart props
import {
    CartesianGrid,
  ReferenceArea,
  ReferenceLine,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type DataType = {
  id: number;
  feature: string;
  impact: number;
  effort: number;
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

const mid = 5;

export default function PrioritizeScatter({
  data,
  quadrant,
}: {
  data: DataType[];
  quadrant: QuadrantType;
}) {
  return (
    <div className="w-full p-2 rounded-2xl border border-(--border-color) bg-(--bg-surface) shadow-sm">
      <ScatterChart
        responsive
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "40vh",
          aspectRatio: 1.618,
        }}
        margin={{ top: 5, right: 20, bottom: 10, left: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.15}/>
        <XAxis
          type="number"
          dataKey="effort"
          name="effort"
          domain={[0, 10]}
          ticks={[0, 5, 10]}
          tick={{ fontSize: 12, fill: "var(--text-secondary)", opacity: 0.6 }}
          stroke="var(--border-color)"
          label={{
            value: "Effort",
            position: "insideBottom",
            offset: -5,
            fill: "var(--text-secondary)",
            style: { fontSize: "12px" },
          }}
        />
        <YAxis
          type="number"
          dataKey="impact"
          name="impact"
          domain={[0, 10]}
          ticks={[0, 5, 10]}
          tick={{ fontSize: 12, fill: "var(--text-secondary)", opacity: 0.6 }}
          stroke="var(--border-color)"
          fill="var(--text-secondary)"
          label={{
            value: "Impact",
            angle: -90,
            position: "insideLeft",
            fill: "var(--text-secondary)",
            style: { fontSize: "12px", textAnchor: "middle" }
          }}
        />
        <ReferenceArea
          x1={0}
          x2={mid}
          y1={mid}
          y2={10}
          fill={quadrant.quickWins.color} fillOpacity={0.08}
          label={{value:"Quick wins",position:'insideTopLeft',fontSize:11,fill:'var(--quad-quick)'}}
        />
        <ReferenceArea
          x1={mid}
          x2={10}
          y1={mid}
          y2={10}
          fill={quadrant.majorProjects.color} fillOpacity={0.08}
          label={{value:"Major projects",position:'insideTopRight',fontSize:11,fill:'var(--quad-major)'}}
        />
        <ReferenceArea
          x1={0}
          x2={mid}
          y1={0}
          y2={mid}
          fill={quadrant.fillIns.color} fillOpacity={0.08}
           label={{value:"Fill ins",position:'insideBottomLeft',fontSize:11,fill:'var(--quad-fill)'}}
        />
        <ReferenceArea
          x1={mid}
          x2={10}
          y1={0}
          y2={mid}
          fill={quadrant.reconsider.color} fillOpacity={0.08}
           label={{value:"Reconsider",position:'insideBottomRight',fontSize:11,fill:'var(--quad-rec)'}}
        />
        <ReferenceLine
          x={mid}
          stroke="var(--border-color)"
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <ReferenceLine
          y={mid}
          stroke="var(--border-color)"
          strokeWidth={1.5}
          strokeDasharray="4 4"
        />
        <Tooltip
          content={({ active, payload }) => {
            if (!active || !payload?.length) return null;
            const p = payload[0].payload as DataType;

            return (
              <div className="flex flex-col gap-1.5 px-3.5 py-2.5 rounded-xl border border-(--border-color) bg-(--bg-surface) shadow-xl text-xs max-w-xs pointer-events-none">
                <h4 className="font-semibold text-(--accent-primary) text-sm tracking-tight border-b border-(--border-color)/50 pb-1">
                  {p.feature}
                </h4>
                <div className="flex flex-col gap-0.5 text-(--text-primary)">
                  <div className="flex justify-between gap-4">
                    <span>Impact:</span>
                    <span className="font-medium text-(--text-secondary)">
                      {p.impact}
                    </span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Effort:</span>
                    <span className="font-medium text-(--text-secondary)">
                      {p.effort}
                    </span>
                  </div>
                </div>
              </div>
            );
          }}
        />
        <Scatter data={data} />
      </ScatterChart>
    </div>
  );
}
