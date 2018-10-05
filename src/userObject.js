export default class Visitor {
  constructor(ageInput, lifeExpectancyInput) {
    this.earthAge = ageInput;
    this.mercuryAge = ageInput / .24;
    this.venusAge = ageInput / .62;
    this.marsAge = ageInput / 1.88;
    this.jupiterAge = ageInput / 11.86;

    let yearsLeftinLife = lifeExpectancyInput - ageInput;

    this.earthLifeRemaining = yearsLeftinLife;
    this.mercuryLifeRemaining = yearsLeftinLife / .24;
    this.venusLifeRemaining = yearsLeftinLife / .62;
    this.marsLifeRemaining = yearsLeftinLife / 1.88;
    this.jupiterLifeRemaining = yearsLeftinLife / 11.86;
  };
}
