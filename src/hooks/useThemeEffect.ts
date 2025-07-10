import { useEffect } from "react";
import { useThemeStore } from "@/store/themeStore";

export const useThemeEffect = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Disable transitions temporarily
    document.documentElement.classList.add("no-transition");

    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", isDark);

    // Re-enable transitions after a short delay
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("no-transition");
    });

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = () => {
      if (theme === "system") {
        // Disable transitions temporarily for system theme changes
        document.documentElement.classList.add("no-transition");
        const isDark = mediaQuery.matches;
        document.documentElement.classList.toggle("dark", isDark);
        requestAnimationFrame(() => {
          document.documentElement.classList.remove("no-transition");
        });
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [theme]);
};