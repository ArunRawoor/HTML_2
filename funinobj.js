const person = {
name: 'Bob',
age: 28,
isstudent:true,
greet() {
return `Hi, I am ${this.name} and I am ${this.age} years old. yes he is a student ${this.isstudent}`;
},
birthday() {
    this.age++;
return `Happy Birthday ${this.name}! You are now ${this.age}.`;
}
};

console.log(Object.keys((person)));
 console.log(Object.values((person)));


 console.log(person.greet());
 console.log(person.birthday());

