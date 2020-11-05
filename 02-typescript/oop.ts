// var self = this

class Person {
	age: number = 35;
	private _secret = 'my password';

	static hello() {
		console.log('hello world');
	}

	public birthday() {
		console.log(this);
		this.age++;
	}
	
	public birthday2 = () => {
		console.log(this);
		this.age++;
	}

	constructor() {

	}
	
	get saySomething() {
		return 'hello'
	}
	
	// set
}
	
const me = new Person();
me.age = 35;

console.log(me.age); // 35
me.birthday();
console.log(me.age); // 36

const a = { birthdayRef: me.birthday}
a.birthdayRef();
console.log(me.age); // ? 36 

/*
class Student extends Person {
	constructor() {
		super();
		
	}
	
	birthday() {
		super.birthday();
		console.log('im a student');
	}
} 

*/