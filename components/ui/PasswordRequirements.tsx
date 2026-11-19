"use client";
//import icons
import { X, Check } from "lucide-react";
export default function PasswordRequirements({
  passwordText,
}: {
  passwordText: string;
}) {
  const minLength = passwordText.length < 8;
  const hasNumber= /\d/.test(passwordText);
  const hasUppercase= /[A-Z]/.test(passwordText);

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
      <div
        className={`flex items-center gap-2 text-xs ${
          hasNumber ? "text-emerald-500" : "text-red-600 dark:text-red-400"
        }`}
      >
        {hasNumber ? (
            <Check className="size-4 shrink-0 " />
        ) : (
            <X className="size-4 shrink-0" />
        )}
        <p className="text-(--text-secondary)">Contains at least 1 number</p>
      </div>
      <div
        className={`flex items-center gap-2 text-xs ${
          hasUppercase ? "text-emerald-500" : "text-red-600 dark:text-red-400"
        }`}
      >
        {hasUppercase ? (
            <Check className="size-4 shrink-0 " />
        ) : (
            <X className="size-4 shrink-0" />
        )}
        <p className="text-(--text-secondary)">Contains at least 1 uppercase letter</p>
      </div>
    </div>
  );
}
