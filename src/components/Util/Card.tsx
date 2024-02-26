import React, { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
    <div className="bg-white p-6 shadow-md dark:bg-black dark:shadow-amber-100 sm:rounded-md">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        {children}
    </div>
);

export default Card;
