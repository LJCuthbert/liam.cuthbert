import { useTheme } from "./ThemeContext.tsx";


const DarkModeToggle = () => {

    const {theme, toggleTheme} = useTheme();
    return (
        <div className="my-auto">
            <label htmlFor="toggle" className="flex items-center cursor-pointer">
                <div className="relative">
                    <input
                        id="toggle"
                        type="checkbox"
                        className="hidden"
                        onChange={toggleTheme}
                        checked={theme === 'dark'}
                    />
                    <div className="toggle__line w-12 h-6 bg-blue-400 rounded-full dark:bg-amber-500 shadow-inner transition-colors duration-500"></div>
                    <div
                        className={`toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0 transition-transform duration-300 ease-in-out transform ${theme === 'dark' ? 'translate-x-full' : 'translate-x-0'}` }
                    ></div>
                </div>
            </label>
        </div>
    )
}

export default DarkModeToggle;
