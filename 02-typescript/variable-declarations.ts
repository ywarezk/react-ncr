/**
 * How to define variables with typescript?
 */
 
// var

// ES6

// EcmaScript
// const, let, var

var hello = 'world';
const myAge = 35;
let myDogNames = 'Piglet and Sweetness';
var someBoolean = true;

// hello = 20;


// 1.  what is the scope of the variable

function sayHello() {
	var message; // only in sayHello function
	message = 'hello'
	
	
	
	
	
	
	
	// if (someBoolean) {
	// 	var message = '';
	// }
	
}

if (someBoolean) {
	let myDog = 'Piglet';
	var anotherMessage = 'hello';	
}

console.log(anotherMessage)

// console.log(myDog);

// scope var 
// functional

// scope of let const: block

// 2. number of assignments
 
// var infinite

// const 1