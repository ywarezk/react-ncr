/**
 * ifs in javascript 
 */

/* 
if (condition) {
	
} else if(anotherCondition) {
	
} else {
	
}

*/

/*
switch(someValue) {
	case 1:
		// ...
		break;
	case 10:
		// ...
		break;
	default:
		// ...
		
}
*/

// 2 types of ifs
/*
 - if that returns a value
 - if that does not return a value
*/

const yetAnotherCondition: boolean = true;

const someValue: string | boolean = yetAnotherCondition ? 'this is true' : true; 




let ifWithoutElse: any = yetAnotherCondition && 'hello world';
ifWithoutElse = yetAnotherCondition || 'hello world';
