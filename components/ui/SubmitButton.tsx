"use client";
//import icons
import { Loader2 } from "lucide-react";
//import hooks
import { useFormStatus } from "react-dom";

type SubmitButtonProps={
    text:string;
    loadingText:string;
}

export default function SubmitButton({text,loadingText}:SubmitButtonProps){
    const {pending}=useFormStatus();

    return(
         <button
      type="submit"
      disabled={pending}
      className="mt-2 w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white bg-(--accent-primary) text-sm font-medium hover:opacity-90 transition-all shadow-sm active:scale-[0.97] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
    >
        {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>{loadingText}</span>
        </>
      ) : (
        text
      )}
    </button>
    )
}