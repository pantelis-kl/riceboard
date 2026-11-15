type RangeProps = {
  id: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  className:string;
};

export default function RiceRange({
  id,
  min,
  max,
  step,
  value,
  onChange,
  className
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
      className={className}
      style={{ "--p": `${p}%` } as React.CSSProperties}
    />
  );
}
