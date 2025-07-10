// --- src/hooks/useTheme.ts ---
export const getThemePreference = () => {
  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
    return localStorage.getItem("theme") as "light" | "dark" | "system";
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};
