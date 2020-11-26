import React, { FC, RefObject, useRef } from 'react';

// Uncontrolled form
// neighberhood 
// react hook forms: https://react-hook-form.com/
export const NameForm: FC = () => {
	// if ()
	// { current: HTMLInputElement }
	// useRef uses:
	//   1 - grab dom elemet
	//   2 - "instance" properties: this.something 
	const inputRef: RefObject<HTMLInputElement> = useRef(null)
	
	/* 
	const myInstanceMember = useRef(10);
	
	myInstanceMember.current = 20;
	*/
	
	const handleSubmit = (event: any) => {
		console.log(inputRef.current?.value);
		
		event.preventDefault();
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input ref={inputRef} type="text" name="dogName" />
		</form>
	)
}