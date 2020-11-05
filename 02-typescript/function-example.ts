

function someFunc( myNumber: number, hello: string ): string {
	console.log(this)	
	return `my age is ${myNumber} and ${hello}`;
}

someFunc( 35, 'hello');

const a = {someRef: someFunc};
a.someRef( 35, 'asdfas');

console.log(this) // undefined
const anotherFunc = (isHello: boolean) => {
	//  this
	console.log(this)	// undefined
	
	// this.arina;
}
