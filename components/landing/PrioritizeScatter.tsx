import { Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";

type DataType = {
  feature: string;
  impact: number;
  effort: number;
};

export default function PrioritizeScatter({ data }: { data: DataType[] }) {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 rounded-2xl border border-(--border-color) bg-(--bg-surface) shadow-sm">
      <ScatterChart
        responsive
        style={{
          width: "100%",
          maxWidth: "700px",
          height: "35vh",
          aspectRatio: 1.618,
        }}
        margin={{ top: 20, right: 24, bottom: 28, left: 12 }}
      >
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
            offset: -15,
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
            style: { fontSize: "12px", textAnchor: "middle" },
          }}
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
