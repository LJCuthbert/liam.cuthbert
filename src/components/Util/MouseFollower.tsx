// MouseFollower.tsx

import React, { useState, useEffect } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { useSpring, animated } from "react-spring";

interface MouseFollowerProps {
    circleSize: number;
    className?: string;
}

interface Position {
    x: number;
    y: number;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({
    className,
    circleSize,
}) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const animatedProps = useSpring({
        zIndex: 1000, // Set a higher zIndex value
        transform: `translate(${position.x - circleSize / 2}px, ${position.y - circleSize / 2}px)`,
        width: `${circleSize}px`,
        height: `${circleSize}px`,
    });

    return (
        <animated.div
            className={`pointer-events-none visible fixed left-0 top-0 rounded-full ${className}`}
            style={{
                ...animatedProps,
            }}
        ></animated.div>
    );
};

export default MouseFollower;
