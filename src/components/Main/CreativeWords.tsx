import "./CreativeWords.css";
import React from "react";

interface CreativeWordsProps {
    words: string[];
    className?: string[];
    color?: string[]
}

const CreativeWords: React.FC<CreativeWordsProps> = ({ words , className, color}) => {
    return (
        <div className={`${className} overflow-hidden inline-flex flex-col`}>
            {words.map((word, index) => (
                <b key={index} className={` ${color} 'word-cycle'`}>
                    {word}
                </b>
            ))}
        </div>
    );
};

export default CreativeWords;
