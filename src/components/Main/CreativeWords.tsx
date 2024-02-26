import "./CreativeWords.css";
import React from "react";

interface CreativeWordsProps {
    words: string[];
}

const CreativeWords: React.FC<CreativeWordsProps> = ({ words }) => {
    return (
        <div className="h-[1em] overflow-hidden flex flex-col">
            {words.map((word, index) => (
                <b key={index} className="text-black dark:text-gray-300 word-cycle">
                    {word}
                </b>
            ))}
        </div>
    );
};

export default CreativeWords;
