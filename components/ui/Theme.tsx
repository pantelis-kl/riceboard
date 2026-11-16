"use client";
//import hooks
import { useSyncExternalStore } from "react";
//import spring animation
import { spring } from "motion";
//import animate view
import { AnimateView } from "motion/react-animate-view";
//import icons
import { Moon, Sun } from "lucide-react";

const subscribeToTheme = (onStoreChange: () => void) => {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getThemeSnapshot = () =>
  document.documentElement.classList.contains("dark");

const getServerThemeSnapshot = () => false;

export default function Theme() {
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme","light")
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <AnimateView
        transition={{
          type: spring,
          visualDuration: 0.2,
        }}
      >
        <button
          onClick={toggleTheme}
          className={`${
            dark
              ? "justify-start bg-(--bg-surface) border border-(--border-color)"
              : "justify-end bg-(--border-color)"
          } flex items-center w-20 h-10 p-1 rounded-full cursor-pointer transition-colors duration-300`}
          aria-label="Toggle Theme"
        >
          <Handle dark={dark} />
        </button>
      </AnimateView>
    </div>
  );
}

const Handle = ({ dark }: { dark: boolean }) => {
  return (
    <div className="flex items-center justify-center w-7 h-7 rounded-full bg-(--bg-primary) shadow-md">
      <AnimateView transition={{ type: spring, visualDuration: 0.2 }}>
        {dark ? (
          <Moon className="w-4 h-4 text-(--text-primary)" />
        ) : (
          <Sun className="w-4 h-4 text-(--text-primary)" />
        )}
      </AnimateView>
    </div>
  );
};
