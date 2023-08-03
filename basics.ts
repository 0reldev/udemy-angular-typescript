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

// Functions & types
function add2(a: number, b: number) {
    return a + b;
}
// The type returned by a function can be defined like this: function test(a: number): string | number {return a;}

function print(value: any) {
    console.log(value);
}
// A function which doesn't return anything actually returns void.


// Generics

function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].spilt('');

class Student {
    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
        ) {}

    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enrol('React');
student.listCourses();
// student.coruses ==> Angular, React

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}

let max: Human;

max = {
    firstName: 'Max',
    age: 32,
    greet() {
        console.log('Hello!');
    },
};

// In comparison with types, inferace can't be implemented by classes. Types can't.

class Instructor implements Human {
    firstName: string;
    age: number;
    greet() {
        console.log('Hello!!!');
    }
}