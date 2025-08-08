import React, { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-lg transition-colors"
      aria-label="Toggle dark mode"
    >
      {dark ? (
        <span role="img" aria-label="Light mode">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="Dark mode">
          🌙
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
