export function getLineLength(points: number[][]) {
  return points.reduce((acc, curr, i) => {
    if (i === 0) return 0;
    acc += Math.hypot(curr[0] - points[i - 1][0], curr[1] - points[i - 1][1]);
    return acc;
  }, 0);
}

// Regex to trim numbers to 2 decimal places
const TRIM_NUMBERS = /(\s?[A-Z]?,?-?[0-9]*\.[0-9]{0,2})(([0-9]|e|-)*)/g;

/**
 * Turn an array of points into a path of quadradic curves.
 * @param stroke ;
 */
export function getSvgPathFromStroke(
  points: number[][],
  closed = true,
): string {
  if (!points.length) {
    return "";
  }

  const max = points.length - 1;

  return points
    .reduce(
      (acc, point, i, arr) => {
        if (i === max) {
          if (closed) acc.push("Z");
        } else
          acc.push(point, [
            (point[0] + arr[i + 1][0]) / 2,
            (point[1] + arr[i + 1][1]) / 2,
          ]);
        return acc;
      },
      ["M", points[0], "Q"],
    )
    .join(" ")
    .replace(TRIM_NUMBERS, "$1");
}
