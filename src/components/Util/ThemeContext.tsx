import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const storedTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
        "(prefers-color-scheme: dark)",
    ).matches;
    const [theme, setTheme] = useState<string>(
        storedTheme || (systemTheme ? "dark" : "light"),
    );

    const applyTheme = (newTheme: string) => {
        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.remove("dark");
            document.documentElement.classList.add("light");
        }
    };

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    };

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const contextValue: ThemeContextProps = {
        theme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
