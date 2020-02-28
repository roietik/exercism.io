//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = n => {
  const isNaturalNum = typeof n !== "number" || n <= 0 ? true : false;

  if (isNaturalNum) {
    throw Error("Only positive n are allowed");
  }

  let steps = 0;
  let tab = "";
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : n * 3 + 1;
    steps++;
    tab = [...tab, {Steps: steps, Number: n}];
  }
  console.table(tab);
  return steps;
}