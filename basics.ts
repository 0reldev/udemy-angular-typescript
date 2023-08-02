// Primitives: number, string, boolean
// More complexe types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 24;
age = 12;
let userName: string;
userName = 'Aurélien';
let isInstructor: boolean;
isInstructor = true;


// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
};
// An object structure can be declared as a type.

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true;
// }

let people: {
    name: string;
    age: number;
}[];
// Arrays of specific objects can be declared.

// Type inference

let course = 'React - The Complete Guide';
// Here, as the variable has been initialized with a string value, the explicit typing would be redundant hence it's not needed in this case.
// course = 123423;