export default class Visitor {
  constructor(ageInput) {
    // add back in lifeExpectancyInput
    this.earthAge = ageInput;
    this.mercuryAge = parseFloat(ageInput / .24);
    this.venusAge = parseFloat(ageInput / .62);
    this.marsAge = parseFloat(ageInput / 1.88);
    this.jupiterAge = parseFloat(ageInput / 11.86);
  };
}
