(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "portfolio-theme";

  try {
    const savedTheme = window.localStorage.getItem(storageKey);
    if (savedTheme === "dark" || savedTheme === "light") {
      root.dataset.theme = savedTheme;
    }
  } catch {
    // CSS follows the system preference when storage is unavailable.
  }

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("theme-toggle");
    const isDark = () => root.dataset.theme
      ? root.dataset.theme === "dark"
      : systemTheme.matches;
    const updateToggle = () => toggle.setAttribute("aria-pressed", String(isDark()));

    toggle.addEventListener("click", () => {
      const theme = isDark() ? "light" : "dark";
      root.dataset.theme = theme;
      updateToggle();

      try {
        window.localStorage.setItem(storageKey, theme);
      } catch {
        // The current page already reflects the choice.
      }
    });

    systemTheme.addEventListener("change", updateToggle);
    updateToggle();
    toggle.hidden = false;
  });
})();
