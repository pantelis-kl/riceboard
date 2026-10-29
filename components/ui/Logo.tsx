//import icons
import { ChartQuadrant } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-0.5 lg:gap-2.5 md:gap-1.5">
      <ChartQuadrant
        style={{ color: "var(--accent-primary)" }}
        className="w-5 h-5 md:w-7 md:h-7"
      />
      <span className="text-lg md:text-2xl font-bold tracking-tight">
        <span style={{ color: "var(--text-primary)" }}>Rice</span>
        <span style={{ color: "var(--accent-primary)" }}>board</span>
      </span>
    </div>
  );
}