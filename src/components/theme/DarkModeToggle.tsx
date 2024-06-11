import { useTheme } from "./ThemeContext.tsx";

const DarkModeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="my-auto">
            <label htmlFor="toggle" className="flex items-center">
                <div className="relative">
                    <input
                        id="toggle"
                        type="checkbox"
                        className="hidden"
                        onChange={toggleTheme}
                        checked={theme === "dark"}
                    />
                    <div className="toggle__line h-6 w-12 rounded-full bg-blue-400 shadow-inner transition-colors duration-500 dark:bg-amber-500"></div>
                    <div
                        className={`toggle__dot absolute inset-y-0 left-0 h-6 w-6 transform rounded-full bg-white shadow transition-transform duration-300 ease-in-out ${theme === "dark" ? "translate-x-full" : "translate-x-0"}`}
                    ></div>
                </div>
            </label>
        </div>
    );
};

export default DarkModeToggle;
