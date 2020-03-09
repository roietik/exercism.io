//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


// between
Number.prototype.circle = function(arr) {
  const [a, b] = arr;
  let min = Math.min.apply(Math, [a, b]),
      max = Math.max.apply(Math, [a, b]);
  return this > min - 1 && this < max;
};

export const score = (x, y, outer = [25, 100], middle = [1, 25], inner = [0, 1]) => {
  const target = x ** 2 + y ** 2;

  if ((typeof x !== "number" || x < 0) || (typeof y !== "number" || y < 0)) {
    throw Error("Only positive args are allowed");
  } else {
    return target.circle(inner) // inner circle  10 points
        ? 10
        : target.circle(middle) // middle circle 5 points
            ? 5
            : target.circle(outer) // outer circle 1 points
                ? 1
                : 0; // outside 0 points
  }
};
console.log(score(4, 40));
