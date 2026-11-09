"use client";
//import icons
import { Link,Check } from "lucide-react";
import { useState } from "react";

const link="Riceboard.com/s/a3h01s";
export default function LinkDemo() {

    const [copied,setCopied]=useState(false);

  return (
    <div className="w-full flex flex-col gap-2 p-4 rounded-2xl border border-(--border-color) bg-(--bg-surface) shadow-sm">
  <span className="text-xs font-semibold tracking-wider text-(--text-secondary)">
    Session link
  </span>
  <div className="flex items-center gap-2 rounded-lg border border-(--border-color) bg-(--bg-primary) p-1.5 pl-3">
    <Link className="size-4 shrink-0 text-(--text-secondary)" />
    <span
      title={link}
      className="min-w-0 flex-1 truncate text-sm text-(--text-secondary)"
    >
      {link.replace("https://", "")}
    </span>
    <button
      type="button"
      onClick={()=>{
        navigator.clipboard.writeText(link);
        setCopied(true)
      }}
      className="flex min-w-24 shrink-0 items-center justify-center gap-1.5 rounded-md bg-(--accent-primary) px-3 py-1.5 text-sm font-medium text-white cursor-pointer transition-opacity hover:opacity-90"
    >
      {copied ? (
        <>
          Copied <Check className="size-4 shrink-0" />
        </>
      ) : (
        "Copy"
      )}
    </button>
  </div>
</div>
  );
}
