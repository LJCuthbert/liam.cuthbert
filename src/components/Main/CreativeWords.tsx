import { useState, useEffect } from "react";
import "./CreativeWords.css";

const CreativeHeader: React.FC = () => {
    const words = ['developer', 'programmer', 'designer'];
    const [currentWordIndex, setCurrentWordIndex] = useState(-1); // Set initial index to -1

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentWordIndex === -1) {
                // If it's the first interval, set index to 0 without animation
                setCurrentWordIndex(0);
            } else {
                setCurrentWordIndex((prevIndex) =>
                    prevIndex === words.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, 6000); // 4 seconds stay + 2 seconds animation time

        return () => clearInterval(interval);
    }, [currentWordIndex, words]);

    return (
        <span className="text-5xl font-bold">
            <span>Creative </span>
            <span className="wordLists">
                {words.map((word, index) => (
                    <b
                        key={index}
                        className={`word ${
                            index === currentWordIndex
                                ? 'word-transition-in'
                                : 'word-transition-out'
                        }`}
                    >
                        {word}
                    </b>
                ))}
            </span>
        </span>
    );
};

export default CreativeHeader;
