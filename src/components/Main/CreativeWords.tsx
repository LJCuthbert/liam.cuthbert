import "./CreativeWords.css";
import React from "react";

interface CreativeWordsProps {
    words: string[];
    className?: string[];
    color?: string[];
}

const CreativeWords: React.FC<CreativeWordsProps> = ({
    words,
    className,
    color,
}) => {
    return (
        <div className={`${className} inline-flex flex-col overflow-hidden`}>
            {words.map((word, index) => (
                <b key={index} className={` ${color} 'word-cycle'`}>
                    {word}
                </b>
            ))}
        </div>
    );
};

export default CreativeWords;
