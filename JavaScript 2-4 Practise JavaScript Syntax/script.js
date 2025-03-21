// Variables
var varVariable = "blah blah blah";// Variable declared with var
let letVariable = true;// Variable declared with let
const constantVariable = 76;// Variable declared with const

// Functions
// Named function
function namedFunction() {
    console.log("Named Function");
}
namedFunction();

// Anonymous function
let anonymousFunction = function() {
    console.log("Anonymous Function");
}
anonymousFunction();

// Built-in function
stringNumber = constantVariable.toString();
console.log("Number as string using built-in toString function: ", stringNumber);

// If else statement
if (letVariable) {
    console.log("letVariable is a boolean. It's value is True");
} else {
    console.log("letVariable is a boolean. It's value is True");
}

// Switch statement
var month = 3;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
}

// Arrays
let numArray = [0, 1, 2]; // Number array
let stringArray = ["blah", "blah blah", "blah blah blah"]; //String array
let mixedArray = ["string", 76, true]; //Array with mixed data types

// Looping through an array
for (let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
}

// Objects
// Making object
let pet = {
    species: "dog",
    name: "Fido",
    color: "black",
    returnName: function() {
        return this.name;
    }
}

// Accessing object properties
console.log("Pet species: ", pet.species);
console.log("Pet name: ", pet.returnName());