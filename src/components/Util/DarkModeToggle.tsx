import { useEffect } from 'react';

const DarkModeToggler = () => {
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    useEffect(() => {
        // Check and apply the theme when the component mounts
        themeCheck();
    }, [userTheme]);

    const themeCheck = () => {
        if (userTheme === 'dark' || (!userTheme && systemTheme)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.add('light');
        }
    };

    const themeSwitch = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        }
    };

    return (
        <div className="my-auto">
            <button className="dark:text-gray-200" onClick={themeSwitch}>
                {document.documentElement.classList.contains('dark') ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
};

export default DarkModeToggler;
