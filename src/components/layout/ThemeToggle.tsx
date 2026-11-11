"use client";

import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Flips <html data-theme> and remembers the choice. The initial theme is applied by an
 * inline script in layout.tsx before first paint, so there is no flash and no React state to sync.
 * Both icons are always rendered and swapped with CSS, which keeps server and client markup identical.
 */
export function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage can be blocked; the toggle still works for this visit */
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", next === "dark" ? "#08090f" : "#fbfaf8");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      className="relative grid size-10 place-items-center rounded-full border border-line text-fg-dim transition-colors duration-200 hover:border-line-hi hover:text-fg active:scale-95"
    >
      <FiSun
        aria-hidden="true"
        className="absolute size-[18px] rotate-0 scale-100 opacity-100 transition-all duration-300 ease-out-expo dark:-rotate-90 dark:scale-50 dark:opacity-0"
      />
      <FiMoon
        aria-hidden="true"
        className="absolute size-[18px] rotate-90 scale-50 opacity-0 transition-all duration-300 ease-out-expo dark:rotate-0 dark:scale-100 dark:opacity-100"
      />
    </button>
  );
}
