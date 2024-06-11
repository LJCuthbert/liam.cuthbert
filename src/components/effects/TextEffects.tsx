import React, { ReactElement, useEffect, useState } from "react";

import "./UnderlineEffect.css"; // Import your CSS file for styling

interface UnderlineEffectProps {
    children: ReactElement;
    color?: string;
}

interface TypewriterEffectProps {
    text: string;
    className?: string;
}

const TypeWriterEffect: React.FC<TypewriterEffectProps> = ({
    text,
    className,
}) => {
    const [index, setIndex] = useState(1);
    const [displayText, setDisplayText] = useState(text.slice(0, index));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayText(text.slice(0, index));
            setIndex((prevIndex) => prevIndex + 1);
        }, 150);

        return () => clearInterval(intervalId);
    }, [index, text]);

    return <h2 className={`text-7xl font-bold ${className}`}>{displayText}</h2>;
};

const UnderlineEffect: React.FC<UnderlineEffectProps> = ({
    children,
    color,
}) => (
    <div className="underline-container">
        <div className={`underline-effect ${color}`}>{children}</div>
    </div>
);

export { TypeWriterEffect, UnderlineEffect };
