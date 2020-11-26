/**
 * that displays hello world on the screen
 
 <CustomHelloWorld name="Pigletshvily" type={'Dog'} age={7} />
 */
 
import React, { FC } from 'react';

interface CustomHelloWorldProps {
	name?: string;
	age: number;
	type: string;	
	cb?: (msg: string) => string;
}
 
// props = { name: 'Pigletshvily', age: 7, type: 'German shapard who is cute...',  }

export const CustomHelloWorld: FC<CustomHelloWorldProps> = ({
	name = 'Pigletshvily',
	age,
	type,
	...props
}) => {
	return (
		<h1>
			Hello World {name} age {age} is of type {type}
		</h1>
	)
}

/*
export function CustomHelloWorld(yaronProps) {
	return (
		<h1>
			Hello World {yaronProps.name} age {yaronProps.age} is of type {yaronProps.type}
		</h1>
	)
}
*/