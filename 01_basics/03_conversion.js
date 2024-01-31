    let score = "100abc"; // string type NaN - Not a Number

    let valueInBoolean; // convert string to boolean
    let valueInNull = null; // convert string to null
    let valueInUndefined = undefined; // convert string to undefined

    console.log(typeof score); // string
    console.log(typeof (score));    

    let valueInNumber = Number(score); // convert string to number
    console.log(valueInNumber); 
    console.log(typeof valueInBoolean);
    console.log(typeof valueInNull);
    console.log(typeof valueInUndefined);

    let greet = "Hello";
    const name = "Kaif";
    console.log(greet + " " + name);








    // Data Types	Description	Example
    // String	represents textual data	'hello', "hello world!" etc
    // Number	an integer or a floating - point number	3, 3.234, 3e-2 etc.
    // BigInt	an integer with arbitrary precision	900719925124740999n, 1n etc.
    // Boolean	Any of two values: true or false	true and false
    // undefined	a data type whose variable is not initialized	let a;
    // null	denotes a null value	let a = null;
    // Symbol	data type whose instances are unique and immutable	let value = Symbol('hello');
    // Object	key - value pairs of collection of data	let student = {};

    const names1 = "Doe";
    const names2 = 'John';

    const names3 = `First Name: ${names1} // 
    Second Name: ${names2}`; // template literals

    console.log(names3); // 

    const number1 = 3;
    console.log(number1);   // 3
    const number2 = 3.433;
    console.log(number2); // 3.433
    const number3 = "xyz"/3; // NaN - Not a Number
    console.log(number3);   

    // BigInt - new data type in js this is used to store large numbers 
    const value1 = 23456789087654323n;
    const result = value1 + 1n;
    console.log(result); // 


    const value2 = 2345678908765432345n;
    const result2 = value2 + 1n;


    const number = 3;
    console.log(typeof number); // null

const name1 = Symbol('name');
const name2 = Symbol('age');
console.log(name1 === name2); // false

const x = Symbol('x');
console.log(typeof x); // symbol

const y = Symbol('hello');
console.log(y.description); // symbol

let id = Symbol("id");

let user = {
    person : "John",
    age : 30,
    [id.description] :30694
};
for (let key in user) 
console.log(key); 


let user = {
    person : "John",
    age : 30,
}

let id = Symbol("id");

user[id] = 30694;
console.log(user[id]);

let person = {
    name: "Jack"
};

let id = Symbol("id");

person[id] = true;
console.log(person[id]);


// get symbol by name
let sym = Symbol.for('hello');
let sym1 = Symbol.for('1231');

// get name by symbol
console.log(Symbol.keyFor(sym)); // hello
console.log(Symbol.keyFor(sym1)); // id

const x = Symbol('hey');

// description property
console.log(x.description); // hey

const stringArray = ['a', 'b', 'c'];
const numberArray = [1, 2, 3];

// isConcatSpreadable property
numberArray[Symbol.isConcatSpreadable] = false;

let result = stringArray.concat(numberArray);
console.log(result); // ["a", "b", "c", [1, 2, 3]]