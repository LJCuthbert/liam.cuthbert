import React, { useState, useEffect } from "react";
import "./CreativeWords.css";

interface CreativeWordsProps {
    words: string[];
    style: string[];
}

const CreativeWords: React.FC<CreativeWordsProps> = ({ words, style }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => {
            clearInterval(interval);
            setCurrentWordIndex(0); // Reset the state when the component unmounts
        };
    }, [words]);

    return (
        <span>
      <span className="wordLists">
        {words.map((word, index) => (
            <b
                key={index}
                className={`word ${
                    index === currentWordIndex
                        ? 'word-transition-in'
                        : 'word-transition-out'
                } ${style.join(" ")}`}
            >
                {word}
            </b>
        ))}
      </span>
    </span>
    );
};

export default CreativeWords;
