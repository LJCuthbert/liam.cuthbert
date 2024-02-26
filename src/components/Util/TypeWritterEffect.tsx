import React, { useEffect, useState } from "react";
import "./TypeWritterEffect.css";

interface TypewriterEffectProps {
    text: string;
    className?: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
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

    return (
        <h2 className={`mb-4 text-7xl font-bold ${className}`}>
            {displayText}
        </h2>
    );
};

export default TypewriterEffect;
