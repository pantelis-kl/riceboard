//import icons
import { ArrowLeft } from "lucide-react";
//import link
import Link from "next/link";
//import image
import Image from "next/image";
import image404 from "@/public/404image-removebg-preview.png";

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center px-4 py-12 bg-(--bg-primary)">
      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left gap-4">
          <h1 className="text-5xl font-semibold tracking-tight text-(--text-primary)">
            Page not found
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-(--text-secondary)">
            The link may be broken, expired, or the session no longer exists.
          </p>

          <Link
            href="/"
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 lg:py-4 rounded-xl bg-(--accent-primary) text-white text-sm lg:text-lg font-medium hover:bg-(--accent-primary)/80 transition-all shadow-sm active:scale-[0.98]"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </div>
        <div className="flex items-center justify-center w-full">
          <Image
            src={image404}
            alt="Page not found illustration"
            priority
            className="w-full max-w-md sm:max-w-xl lg:max-w-none h-auto select-none"
          />
        </div>
      </div>
    </main>
  );
}
