//import icons
import { ChartQuadrant } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-0.5 lg:gap-2.5 md:gap-1.5">
      <ChartQuadrant
        style={{ color: "var(--accent-primary)" }}
        className="w-7 h-7"
      />
      <span className="text-xl md:text-2xl font-bold tracking-tight">
        <span style={{ color: "var(--text-primary)" }}>Rice</span>
        <span style={{ color: "var(--accent-primary)" }}>board</span>
      </span>
    </div>
  );
}