
//3 Write a “person” class to hold all the details.
class Person {
  constructor(firstName, lastName, age, gender,city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
      this.gender = gender;
      this.city=city
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  details() {
    console.log(`Name: ${this.getFullName()}`);
    console.log(`Age: ${this.age}`);
    console.log(`Gender: ${this.gender}`);
    console.log(`City: ${this.city}`);
  }
}


const person1 = new Person("Yahini", "Sekar", 22, "Female","Trichy");
const person2 = new Person("Dhanish", "Sekar", 20, "Male","Chennai");

person1.details();
console.log("\n");
person2.details();
