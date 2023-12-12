import React, {ReactNode} from "react";

interface CardProps {
    title: string;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
    <div className="bg-white dark:bg-black p-6 rounded-md shadow-md dark:shadow-amber-100">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
    </div>
);

export default Card;