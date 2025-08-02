// This is my first Javascript code!
// console.log('Hello World');


//A run time env used to execute javascript code is called node - node index.js

// using let to declare variable instead of var
// when creating variables;
// 1.you cannot use reserved keywords
// 2.should be meaningful
// 3.Cannot start with a number (ie; a variable cannot 1name)
// 4. Are case-sensitive


let name = 'Mash';
console.log(name);

let firstName = 'Mosh';
let lastName = 'Karan';
console.log(firstName,lastName)


// declaring a variable called interest rates
// use const when you do not need to reassign variables
// use let when you will need to reassign variables
let interestRate = 0.3;
// interestRate = 1;
console.log(interestRate)

const principalRate = 0.4;
console.log(principalRate)

// in java, we have 2 categories of data types; primitive/value types, reference type
// primitive/value types : strings, booleans, Number, undefined, null
// Reference types include Object,  Array, Function
// An object in programming is like an object in real life think of a person who has attributes age, name, address {
// all these are properties of a person}
// when dealing with multiple related variables, they can be enclosed in an object
let isApproved = true  //Boolean
let myfirstName = undefined  //undefined
let age = 30 //number
let myLastName = null //null
let selectedColor = null

// java is a dynamic language

// creating an object
let myname = 'Denick'
let myAge = 50
// Now I proceed to create an object person
let person = {
    name: 'DG',
    age : '20'
};
console.log(person)


// say we want to access the name of this person and change it
//1. we may use the dot notation
person.name = 'John'
console.log(person)

// 2. bracket notation and then extract take the specific name
person['name'] = 'Mary';
console.log(person.name);


// dot notation is short
//
let selection = 'name';
person[selection]='Mary';
console.log(person.name);


// Arrays - used when there is a list of objects for example; a list of products in a shopping cart, or a list of colors a user has selected
let selectedColors = ['red','blue'];    //array is initialized with the two colors inside
console.log(selectedColors);   //prints both colors

// let's say you want to access the first color in the array
console.log(selectedColors[0]);

//add another element to our selected Colors list
selectedColors[2] ='green';
console.log(selectedColors);

//An array is an object
// we can look for the properties of an object using the dot notation,,,, everytime we declare an array using the [] the array receives the properties shown after you add the dot after the variable.
console.log(selectedColors.length)


//Functions in Js
//A fxn is a set of statement that performs a task or calculates a value

//simple first function in js
function greet(){
    console.log('Hello World');
}
greet();

// Note: Parameter & arguments are used i.e; John and Mary used when calling the function are arguments, while name that is used in the first line of creating the function is a parameter
//argument is the actual value supplied for the parameter
function greetPerson(name){
    console.log('Hello  ' + name);
}
greetPerson('John');
greetPerson('Mary');

// The function can be reused as many times as possible i.e.,
greetPerson('DG')
// A function can have multi parameters i.e.,
function sayHello(name, lastname){
    console.log('Hello ' + name + ' ' +lastname)
}
sayHello('John','Smith');

// Types of Functions
// There is a cleaner way to write the above function and removing the concatenations
sayHello()

// calculating a value
function square(number){
    return number*number;
}
// either
console.log(square(2))
// or
let number = square(2)
console.log(number)

//in console.log function, you can call in another function as above--- console.log(square(2)) or a simple string as console.log('Hello')









