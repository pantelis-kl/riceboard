"use client";
//import icons
import { Upload, FileText, Dot, X } from "lucide-react";
import { useRef, useState } from "react";

const validFiles = /\.(csv|txt|md)$/i;
const sampleData = [
  "Dark theme",
  "Export to CSV",
  "Push notifications",
  "Drag & Drop",
  "Auto save",
];

function parse(text: string) {
  const rows = text
    .split(/\r?\n/)
    .map((l) =>
      l
        .replace(/^[\s\-*#>\d.]+/, "")
        .split(",")[0]
        .replace(/["']/g, "")
        .trim(),
    )
    .filter(Boolean);
  if (rows[0] && /^(features?|names?|titles?)$/i.test(rows[0])) rows.shift();
  return rows.slice(0, 50);
}

export default function UploadDemo() {
  const [file, setFile] = useState<{ name: string; features: string[] } | null>(
    null,
  );
  const [drag, setDrag] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = async (file: File | undefined) => {
    if (!file) return;
    if (!validFiles.test(file.name))
      return setError("Select a CSV,TXT, or MD file");
    if (file.size > 1_000_000)
      return setError("The file is too large (Max size:1MB)");
    const text = parse(await file.text());
    if (!text.length) setError("The file is empty");
    setError(null);
    setFile({ name: file.name, features: text });
  };

  const closeFile = () => {
    setFile(null);
    setError(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {file ? (
        <div className="flex items-center flex-col gap-3 w-full p-4 rounded-xl border border-(--border-color) bg-(--bg-surface) shadow-sm">
          <button
            className="ml-auto text-(--text-primary) cursor-pointer hover:text-red-500"
            onClick={closeFile}
          >
            <X className="size-4 shrink-0" />
          </button>
          <div className="flex w-full justify-baseline items-start gap-3">
            <FileText className="size-5 shrink-0 text-(--text-secondary)" />
            <div className="flex flex-col items-start w-full lg:flex-row">
              <span className="text-sm truncate font-semibold text-(--text-primary) tracking-tight">
                {file.name}
              </span>
              <span className="text-xs lg:ml-auto shrink-0 text-(--text-secondary) mt-0.5">
                {file.features.length} features uploaded
              </span>
            </div>
          </div>
          <ul className="flex flex-col w-full text-start">
            {file.features.slice(0, 5).map((f) => (
              <li
                key={f}
                className="flex items-center text-xs sm:text-sm gap-2 border-b border-(--border-color) py-2 text-(--text-primary)"
              >
                <Dot className="size-6 shrink-0" />
                <span className="truncate">{f}</span>
              </li>
            ))}
          </ul>
          {file.features.length - file.features.slice(0, 5).length > 0 && (
            <p className="text-(--text-secondary) text-xs self-start">
              +{file.features.length - file.features.slice(0, 5).length} more
            </p>
          )}
        </div>
      ) : (
        <label
          onDragOver={(e) => {
            e.preventDefault();
            setDrag(true);
          }}
          onDragLeave={() => setDrag(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDrag(false);
            handleFile(e.dataTransfer.files?.[0]);
          }}
          className={`flex flex-col items-center justify-center h-32 px-4 transition border-2 border-dashed rounded-xl hover:bg-(--bg-surface) hover:border-purple-500/50 cursor-pointer group
         ${drag ? "border-purple-500/50 bg-purple-500/10" : " border-(--border-color) bg-(--bg-surface)/50"}`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <Upload className="text-(--text-primary)" />
            <p className="text-xs font-medium text-(--text-primary)">
              <span className="font-semibold text-(--accent-primary)">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-[11px] text-(--text-secondary) mt-1">
              CSV, TXT or Markdown
            </p>
          </div>
          <input
            ref={inputRef}
            type="file"
            accept=".csv,.txt,.md"
            className="sr-only"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
          <button 
          onClick={()=>setFile({name:'sample.csv',features:sampleData})}
          className="self-center cursor-pointer text-xs py-2 text-(--text-secondary) underline underline-offset-2 hover:text-(--text-primary)">
            Try with sample features
          </button>
        </label>
      )}
    </div>
  );
}
