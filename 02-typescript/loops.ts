/**
 *
 */
 
const myNumArray: number[] = [1,2,3];
//  myNumArray.push('hello');

const myStringArray: Array<string | number | boolean> = ['1', 'hello', 1, true]; 

const myObj: {[key: string]: string | number} = {
	foo: 'bar',
	hello: 42,
	// wat: true
}

/*
for (const item of myNumArray) {
	
}

for (const item in myObj) {

}
*/

// [2,4,6]
const anotherNumArray = myNumArray.map(function(num: number) {
	return num * 2;
})