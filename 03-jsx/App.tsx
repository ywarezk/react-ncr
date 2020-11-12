import React from 'react';
import { Header } from './Header';

/*
React.createElement(
	'h1', null, 'some text'
)

React.createElement(
	'div', null, 
)
*/

/*
function App() {
	return (
		<div>
			<Header />
			<header> another header </header>
		</div>
	)
}
*/

// React.Fragment
// React.createElement(React.Fragment, ...)

// React.createElement(Header, ...)
// React.createElement('header', ...)
function App() {
	return (
		<>
			<Header />		
			<header> another header </header>
			{/* <img src="..." />
			<input ... /> */}
		</>
	)
}