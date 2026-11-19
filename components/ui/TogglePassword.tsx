"use client";
//import icons
import { Eye, EyeOff } from "lucide-react";
//import set state action type
import { Dispatch, SetStateAction } from "react";

export default function TogglePassword({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      type="button"
      onClick={() => setOpen((prev) => !prev)}
      aria-label={open ? "Hide password" : "Show password"}
      aria-pressed={open}
      className="absolute right-2.5 p-1.5 rounded-lg text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--bg-surface) transition-colors cursor-pointer"
    >
      {open ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
    </button>
  );
}
