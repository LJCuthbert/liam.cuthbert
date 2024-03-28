// MouseFollower.tsx

import React, { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { useSpring, animated } from 'react-spring';

interface MouseFollowerProps {
    circleSize: number
    className?: string;
}

interface Position {
    x: number;
    y: number;
}

const MouseFollower: React.FC<MouseFollowerProps> = ({ className, circleSize }) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    const style = {
        cursor: 'none', // Hide the cursor
    };

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const animatedProps = useSpring({
        zIndex: 1000, // Set a higher zIndex value
        transform: `translate(${position.x - circleSize / 2}px, ${position.y - circleSize / 2}px)`,
    });

    return (
        <animated.div
            className={`fixed top-0 left-0 visible rounded-full pointer-events-none ${className}`}
            style={{
                ...animatedProps,
                ...style,
            }}
        >
        </animated.div>
    );
};

export default MouseFollower;
