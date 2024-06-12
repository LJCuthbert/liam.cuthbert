import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./CustomCursor.css";

const SVGNS = "http://www.w3.org/2000/svg";
const config = { lines: 25 };

const CustomCursor = () => {
  const defaultSize = 15;
  const enlargedSize = 30; // Size when hovering over text
  const [position, setPosition] = useState({
    x: window.innerWidth * 0.5,
    y: window.innerHeight * 0.5,
  });
  const [currSize, setCurrSize] = useState(defaultSize);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const circleRef = useRef<SVGCircleElement | null>(null);
  const _ease = 0.8;
  const lines = useRef<SVGLineElement[]>([]);

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

  useEffect(() => {
    if (svgRef.current) {
      const linesArray: SVGLineElement[] = [];

      for (let i = 0; i < config.lines; i++) {
        const line = document.createElementNS(SVGNS, "line");
        line.setAttribute("stroke", "black");
        svgRef.current.appendChild(line);
        linesArray.push(line);
      }

      lines.current = linesArray;
      animateLines();
    }
  }, [svgRef]);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setAttribute("cx", String(position.x));
      circleRef.current.setAttribute("cy", String(position.y));
    }
    animateLines();
  }, [position]);

  const animateLines = () => {
    console.log("Animating lines");
    lines.current.forEach((line) => {
      gsap.set(line, { x: position.x, y: position.y });

      gsap.to(line, {
        duration: 1,
        x: "+=1",
        y: "+=1",
        repeat: -1,
        ease: "none",
        modifiers: {
          x: () => {
            const posX = parseFloat(gsap.getProperty(line, "x").toString());
            const leaderX = position.x;
            const x = posX + (leaderX - posX) * _ease;
            line.setAttribute("x2", String(leaderX - x));
            return String(x);
          },
          y: () => {
            const posY = parseFloat(gsap.getProperty(line, "y").toString());
            const leaderY = position.y;
            const y = posY + (leaderY - posY) * _ease;
            line.setAttribute("y2", String(leaderY - y));
            return String(y);
          },
        },
      });
    });
  };

  return (
    <svg xmlns="http://www.w3.org/2000/svg" ref={svgRef} className="cursor-svg">
      <circle fill="black" r={currSize} ref={circleRef} />
    </svg>
  );
};

export default CustomCursor;
