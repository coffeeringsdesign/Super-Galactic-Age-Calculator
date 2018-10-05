export default class Visitor {
  constructor(birthdate, age) {
    this.birthdate = birthDate;
    this.age = age;
  };

  earthAge() {
    let birthday = birthDate.split("-").join(", ");
    let dateBirth = new Date(birthday)
    let currentDate = new Date();
    let userAge = dateBirth - currentDate;
  }
}
