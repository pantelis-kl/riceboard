"use client";
//import icons
import { X, Check } from "lucide-react";
export default function PasswordRequirements({
  passwordText,
}: {
  passwordText: string;
}) {
  const minLength = passwordText.length <= 8;

  return (
    <div className="flex flex-col gap-1.5 mt-1">
      <div
        className={`flex items-center gap-2 text-xs ${
          minLength ? "text-red-600 dark:text-red-400" : "text-emerald-500"
        }`}
      >
        {minLength ? (
          <X className="size-4 shrink-0" />
        ) : (
          <Check className="size-4 shrink-0 " />
        )}
        <p className="text-(--text-secondary)">At least 8 characters</p>
      </div>
    </div>
  );
}
