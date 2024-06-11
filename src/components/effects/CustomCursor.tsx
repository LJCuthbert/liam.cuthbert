import "./CustomCursor.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
    const defaultSize = 15;
    const enlargedSize = 30; // Size when hovering over text
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [currSize, setCurrSize] = useState(defaultSize);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handlePointerEnter = () => {
            setCurrSize(enlargedSize);
        };

        const handlePointerLeave = () => {
            setCurrSize(defaultSize);
        };

        window.addEventListener("pointermove", handleMouseMove);

        // Select all text elements
        const textElements = document.querySelectorAll(
            "p, span, a, h1, h2, h3, h4, h5, h6, li",
        );
        textElements.forEach((element) => {
            element.addEventListener("pointerenter", handlePointerEnter);
            element.addEventListener("pointerleave", handlePointerLeave);
        });

        return () => {
            window.removeEventListener("pointermove", handleMouseMove);
            textElements.forEach((element) => {
                element.removeEventListener("pointerenter", handlePointerEnter);
                element.removeEventListener("pointerleave", handlePointerLeave);
            });
        };
    }, []);

    return (
        <motion.div
            className="cursor"
            style={{
                translateX: position.x - currSize / 2,
                translateY: position.y - currSize / 2,
                height: `${currSize}px`,
                width: `${currSize}px`,
            }}
        ></motion.div>
    );
};

export default CustomCursor;
