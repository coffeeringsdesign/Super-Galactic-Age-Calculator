export default class Visitor {
  constructor(ageInput, lifeExpectancyInput) {
    this.earthAge = ageInput;
    this.mercuryAge = (ageInput / .24).toFixed();
    this.venusAge = (ageInput / .62).toFixed();
    this.marsAge = (ageInput / 1.88).toFixed();
    this.jupiterAge = (ageInput / 11.86).toFixed();

    let yearsLeftinLife = lifeExpectancyInput - ageInput;

    this.earthLifeRemaining = yearsLeftinLife;
    this.mercuryLifeRemaining = (yearsLeftinLife / .24).toFixed();
    this.venusLifeRemaining = (yearsLeftinLife / .62).toFixed();
    this.marsLifeRemaining = (yearsLeftinLife / 1.88).toFixed();
    this.jupiterLifeRemaining = (yearsLeftinLife / 11.86).toFixed();
  };
}
