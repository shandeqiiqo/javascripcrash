// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true

//     },
//     {
//         id: 2,
//         text: 'Meeting with friend',
//         isCompleted: true

//     },
//     {
//         id: 3,
//         text: 'Do the taxes',
//         isCompleted: false

//     },

// ]
// //For
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text)
// }
// //map
// const todoText = todos.map((todo) => todo.text);

// console.log(todoText)

// //forEach
// todos.forEach((element) => console.log(element.id))

// //Filter + map. First we filter, than we apply map to find the text of filtered condition.
// const todoCompleted = todos.filter((todo) => todo.isCompleted === true).map((todo) => todo.text);

// console.log(todoCompleted)

// CONSTRUCTOR FUNCTIONS
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}

//prototype
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Lucas", "Silverio", "8-29-1994");

console.log(person1.getBirthYear());
console.log(person2.getFullName());

console.log(person1.dob);

//Prototypes:
console.log(person2.getFullName());

//Class
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//esta fazendo a mesma coisa, mas com mais sugar sintax, mais bonito de escrever

