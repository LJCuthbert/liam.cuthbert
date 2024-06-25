import React, { useEffect, useState } from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import getStroke from "perfect-freehand";
import { getSvgPathFromStroke } from "../util/helper";
import "./CustomCursor.css";

const TRAIL_SIZE = 32;
const SHRINK_RATE = 0.1;

interface Point {
  x: number;
  y: number;
}

const Trail = observer(({ points }: { points: Point[] }) => {
  const d = getSvgPathFromStroke(
    getStroke(
      points.map(({ x, y }) => [x, y]),
      {
        size: TRAIL_SIZE,
        streamline: 0.25,
        start: { taper: true },
        simulatePressure: false,
      },
    ),
  );

  return <path className="trail-fill" d={d} />;
});

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const model = useLocalObservable(() => ({
    points: [] as Point[],
    addPoint(x: number, y: number) {
      this.points.push({ x, y });
    },
    shrinkTrail() {
      const len = this.points.length;
      if (len > 1) {
        this.points.splice(0, Math.ceil(len * SHRINK_RATE));
      } else {
        this.points.length = 0;
      }
    },
  }));

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      model.addPoint(event.clientX, event.clientY);
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const shrinkInterval = setInterval(() => {
      model.shrinkTrail();
    }, 32);

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(shrinkInterval);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [model]);
  return (
    <div>
      <svg className="cursor-svg">
        <circle
          cx={position.x}
          cy={position.y}
          r={TRAIL_SIZE / 2}
          className="trail-fill"
        />
        <Trail points={model.points} />
      </svg>
    </div>
  );
};

export default CustomCursor;
