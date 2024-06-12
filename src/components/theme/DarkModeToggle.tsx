import { useTheme } from "./ThemeContext.tsx";
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover((prevState) => !prevState);
  };
  const handleMouseLeave = () => {
    setHover((prevState) => !prevState);
  };
  useEffect(() => {
    const element = document.getElementById("buttonToggle");
    if (!element) return;

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div className="my-auto" id="buttonToggle">
      <label htmlFor="toggle" className="flex items-center">
        <div className="relative">
          <input
            id="toggle"
            type="checkbox"
            className="hidden"
            onChange={toggleTheme}
            checked={theme === "dark"}
          />
          <div
            className={`toggle__line h-6 w-12 rounded-full shadow-inner transition ${hover ? "bg-blue-400/70 dark:bg-amber-500/70" : "bg-blue-400 dark:bg-amber-500"}`}
          ></div>
          <div
            className={`toggle__dot absolute inset-y-0 left-0 h-6 w-6 transform rounded-full ${hover ? "bg-slate-100" : "bg-white"} shadow transition ease-in-out ${theme === "dark" ? "translate-x-full" : "translate-x-0"}`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeToggle;
