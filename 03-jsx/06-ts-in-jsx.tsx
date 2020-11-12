/**

You can place typescript code inside your jsx

 */
 
import React from 'react';
 
/*
	<div class="bg-dark" >
		<h1>this is the header 0.34534425</h1>
	</div>
 */
 
 /*
	<label for="something"></label>
	<label htmlFor="something"></label>
	<input id="something" />
  */
export function Header() {
	return (
		<>
			<div id="hello" className="bg-dark">
				<h1>this is the header { Math.random() }</h1>
			</div>
		</>
	)
}