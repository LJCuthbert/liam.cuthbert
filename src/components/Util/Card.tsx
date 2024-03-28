import React, { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, className }) => (
    <div
        className={`${className} bg-white p-14 shadow-md  dark:bg-blue-900 dark:shadow-amber-100 sm:rounded-md sm:p-6`}
    >
        <h2 className="mb-4 text-center text-2xl font-bold sm:text-left">
            {title}
        </h2>
        {children}
    </div>
);

export { Card };
