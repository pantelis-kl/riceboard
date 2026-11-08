type RangeProps = {
  id: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
};

export default function RiceRange({
  id,
  min,
  max,
  step,
  value,
  onChange,
}: RangeProps) {
  const p = ((value - min) / (max - min)) * 100;

  return (
    <input
      type="range"
      id={id}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="rice-range w-full h-1.5 rounded-lg cursor-pointer"
      style={{ "--p": `${p}%` } as React.CSSProperties}
    />
  );
}
