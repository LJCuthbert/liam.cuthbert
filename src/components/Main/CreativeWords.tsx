import { useState, useEffect } from "react";
import "./CreativeWords.css";

const CreativeWords: React.FC = () => {
    const words = ['developer', 'programmer', 'designer'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) =>
                prevIndex === words.length - 1 ? 0 : prevIndex + 1
            );
        }, 6000);

        return () => clearInterval(interval);
    }, [currentWordIndex, words]);

    return (
        <span className="text-5xl">
            <span className="uppercase">Creative </span>
            <span className="uppercase wordLists">
                {words.map((word, index) => (
                    <b
                        key={index}
                        className={`word ${
                            index === currentWordIndex
                                ? 'word-transition-in'
                                : 'word-transition-out'
                        }`}>
                        {word}
                    </b>
                ))}
            </span>
        </span>
    );
};

export default CreativeWords;
