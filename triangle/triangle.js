//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }
  isNaturalNum = () =>
      typeof this.a === "number" &&
      this.a >= 1 &&
      typeof this.b === "number" &&
      this.b >= 1 &&
      typeof this.c === "number" &&
      this.c >= 1;
  isEquilateral = () =>
      this.a === this.b && this.b === this.c && this.isNaturalNum();
  isIsosceles = () =>
      (this.a === this.b || this.a === this.c || this.b === this.c) &&
      this.isNaturalNum();
  isScalene = () =>
      this.a !== this.b && this.b !== this.c && this.isNaturalNum();
  static create = (a, b ,c) => new Triangle(a, b, c);
}

Triangle.create(22, 22, 22).isEquilateral();

