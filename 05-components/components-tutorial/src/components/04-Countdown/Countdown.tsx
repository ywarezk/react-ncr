/**
 * 5..4..3..2..1..0..-1..-2
 */
 
import React, {FC, useState, useEffect} from 'react';

/*
setInterval(() => {
	
}, 1000)
*/

export const Countdown: FC<{name: string, destroyCb: () => void}> = ({name, destroyCb}) => {
	// do not wrap the hooks with if, for
	// if (){useState}
	const [counter, setCounter] = useState(5);
	// console.log('body of function:' + counter);
	// not good
	// breaking purity
	// don't disturb me while im painting!
	/*
	setInterval(() => {
		setCounter(counter - 1)	
	}, 1000)
	*/
	
	const [isZogi, setIsZogi] = useState(false);
	
	// call the function after the render
	useEffect(function ofTheUseEffect() {
		
		const intervalId = setInterval(function ofTheInterval() {
			// console.log('setInterval:' + counter);
			// setCounter(counter - 1)
			setCounter(function toSetTheNewState(currentCounter) {
				return currentCounter - 1;
			})
		}, 1000);
		
		return function cleanTheUseEffect() {
			clearInterval(intervalId);
		}
	}, [])
	
	const decrementCounter = () => {
		setCounter((currentCounter) => {
			return currentCounter - 1;
		})
	}
	
	// zogi
	useEffect(() => {
		if (counter % 2 === 0) {
			setIsZogi(true);
		} else {
			setIsZogi(false);
		}
	}, [counter,/* someState, someProps */])
	
	// check if i need to destroy myself
	useEffect(() => {
		if (counter !== 0) return;
		
		destroyCb();
	}, [counter, destroyCb])
	
	return (
		<div className="countdown">
			<h1>{counter}</h1>
			<button onClick={decrementCounter}>
				Decrement
			</button>
			<h3>
				{ isZogi ? 'Zogi' : 'IZogi' }
			</h3>
		</div>
		
	)
}