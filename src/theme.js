import { writable } from "svelte/store";

export const getThemeFromEnvironment = () => {
  if (typeof document === "undefined") {
    return false;
  }
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    return true;
  }
  if (storedTheme === "light") {
    return false;
  }
  return document.documentElement.classList.contains("dark");
};

const applyTheme = (dark) => {
  document.documentElement.classList.toggle("dark", dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
};

export const dark = writable(false);

export const initializeTheme = () => {
  const isDark = getThemeFromEnvironment();
  dark.set(isDark);
  applyTheme(isDark);
};

export const toggleTheme = () => {
  dark.update((current) => {
    const next = !current;
    applyTheme(next);
    return next;
  });
};