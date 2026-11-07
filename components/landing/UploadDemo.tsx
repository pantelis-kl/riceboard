"use client";
//import icons
import { Upload,FileText,Dot } from "lucide-react";
import { useState } from "react";

const validFiles=/\.(csv|txt|md)$/i;

function parse(text: string) {
  const rows = text
    .split(/\r?\n/)
    .map((l) => l.replace(/^[\s\-*#>\d.]+/, "").split(",")[0].replace(/["']/g, "").trim())
    .filter(Boolean);
  if (rows[0] && /^(features?|names?|titles?)$/i.test(rows[0])) rows.shift();
  return rows.slice(0, 50);
}

export default function UploadDemo() {

    const[file,setFile]=useState<{name:string,features:string[]} | null>(null);
    const [error,setError]=useState<string | null>(null);

    const handleFile= async (file:File | undefined)=>{
        if(!file) return;
        if(!validFiles.test(file.name)) return setError("Select a CSV,TXT, or MD file");
        if(file.size>1_000_000) return setError("The file is too large (Max size:1MB)");
        const text=parse(await file.text());
        if(!text.length) setError("The file is empty");
        setError(null);        
        setFile({name:file.name,features:text})

    }

  return (
    <div className="flex flex-col gap-3 w-full mt-3">
      {file ? (
        <div className="flex items-center flex-col gap-3 w-full p-4 rounded-xl border border-(--border-color) bg-(--bg-surface) shadow-sm">
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
                className="flex items-center text-xs lg:text-sm gap-2 border-b border-(--border-color) py-2 text-(--text-primary)"
              >
                <Dot className="size-6 shrink-0"/>
                <span className="truncate">{f}</span>
              </li>
            ))}
          </ul>
          {file.features.length-file.features.slice(0,5).length>0 && 
          <p className="text-(--text-secondary) text-xs self-start">+{file.features.length-file.features.slice(0,5).length} more</p>
          }
        </div>
      ) : (
        <label className="flex flex-col items-center justify-center h-32 px-4 transition border-2 border-dashed rounded-xl border-(--border-color) bg-(--bg-surface)/50 hover:bg-(--bg-surface) hover:border-purple-500/50 cursor-pointer group">
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
            type="file"
            accept=".csv,.txt,.md"
            className="sr-only"
            onChange={(e) => handleFile(e.target.files?.[0])}
          />
          {error && <p className="text-red-500 text-xs">{error}</p>}
        </label>
      )}
    </div>
  );
}
