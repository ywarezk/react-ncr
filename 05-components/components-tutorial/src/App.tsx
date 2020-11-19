import React from 'react';
import './App.css';
// import { HelloWorld } from './components/01-HelloWorld/HelloWorld';
import { CustomHelloWorld } from './components/02-CustomHelloWorld/CustomHelloWorld';

function App() {
	return (
		<div className="App">
			{/* <HelloWorld /> */}
			
			<CustomHelloWorld age={7} type="German Shepard" />
		</div>
	);
}

export default App;
