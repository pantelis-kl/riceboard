type DataType = {
  feature: string;
  rice: number;
};

export default function RiceResults({ data }: { data: DataType[] }) {
  return (
    <div className="flex w-full flex-col gap-2 rounded-2xl border border-(--border-color) bg-(--bg-surface) p-3 shadow-sm sm:gap-3 sm:p-4">
  <div className="flex items-center justify-between border-b border-(--border-color) px-2 py-2 text-xs font-semibold tracking-wider text-(--text-secondary) sm:px-3">
    <span>Features</span>
    <span>RICE Score</span>
  </div>

  <ul className="flex w-full flex-col sm:gap-2">
    {data.map((f, index) => (
      <li
        key={f.feature}
        className="flex items-center justify-between gap-3 border-b border-(--border-color) px-2 py-2.5 last:border-b-0 sm:rounded-xl sm:border sm:bg-(--bg-surface) sm:p-3 sm:shadow-sm sm:last:border-b"
      >
        <div className="flex min-w-0 items-center gap-3">
          <span className="flex size-6 shrink-0 items-center justify-center rounded-lg bg-(--border-color)/40 font-mono text-xs font-semibold text-(--text-secondary)">
            {index + 1}
          </span>
          <span
            title={f.feature}
            className="truncate text-sm font-medium text-(--text-primary)"
          >
            {f.feature}
          </span>
        </div>

        <span className="shrink-0 text-sm font-semibold tabular-nums text-(--text-primary)">
          {f.rice.toLocaleString()}
        </span>
      </li>
    ))}
  </ul>
</div>
  );
}
