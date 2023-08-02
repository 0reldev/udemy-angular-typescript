// Primitives: number, string, boolean
// More complexe types: arrays, objects
// Function types, parameters

// Primitives
let age: number = 24;
age = 12;
let userName: string | string[];
userName = 'Aurélien';
let isInstructor: boolean;
isInstructor = true;


// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
}
// Personalized types can be declared.

let person: Person;
// An object structure can be declared as a type.

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true;
// }

let people: Person[];
// Arrays of specific objects can be declared.

// Type inference
let course: string | number = 'React - The Complete Guide';
// Multiple types can be used for a single variable, thanks to the character '|'.
// Here, the course parameter can be a string or a number.

course = 123423;