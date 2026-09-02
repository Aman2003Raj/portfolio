import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full border transition-colors duration-300"
      style={{
        backgroundColor:
          theme === "light"
            ? "var(--secondary)"
            : "var(--primary)",
        borderColor: "var(--border)",
      }}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
    >
      <span
        className={`absolute top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs bg-white shadow-md transition-transform duration-300 ${
          theme === "dark"
            ? "translate-x-7"
            : "translate-x-0.5"
        }`}
      >
        {theme === "light" ? "☀️" : "🌙"}
      </span>
    </button>
  );
}

export default ThemeToggle;