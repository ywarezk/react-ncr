/**

You can place typescript code inside your jsx

 */
 
import React, {SyntheticEvent, MouseEvent} from 'react';

function Hello() {
	return (
		<span>
			'hello world'
		</span>		
	);
}


function gaiAttributesFactory() {
	return {
		id: 'h1-gai',
		className: "gai-class"
	}	
}
 
/*
const div = new DivHTMLElement()
div.style = {backgroundColor: 'red'}
	<div onclick="runSomeFunction" class="default" style="background-color: red; height: 50px;" >
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
			<div
				onMouseEnter={ function (event) {} }
				onClick={ function(event) {} }
				style={ {backgroundColor: 'red', height: '50px'} } 
				className={ localStorage.getItem('some-key') || 'default' } 
			>
				<h1>this is the header { Math.random() }</h1>
				<h1>this is the header { 'hello' }</h1>
				{/* this is the header */}
				<h1>this is the header { false }</h1>
				{/* this is the header */}
				<h1>this is the header { <span>wat?</span> }</h1>
				<h1 {...{id: 'gai-id'}}>this is the header { <Hello /> }</h1>
				
				{/* wrong */}
				<h1 {...gaiAttributesFactory()}  >this is the header { {hello: 'world'} }</h1>
				
				{/* <h1>this is the header 10 hello <span>sdfasd</span></h1> */}
				<h1>this is the header { [
					10, 'hello', <span>sdfasd</span>
				] } </h1>
			</div>
			<input disabled={ true } />
			<input disabled />
			<img height={ Math.random() * 10 } />
			
			<form onSubmit={function() {}}>
				
			</form>
		</>
	)
}

// if you place typescript between opening and closing tags these are the rules:
// the expression must have the following types:

/*
- number
- string
- boolean
- falsy - null/ undefined/ ""
- ReactElement / Component
- array that contains the above


*/