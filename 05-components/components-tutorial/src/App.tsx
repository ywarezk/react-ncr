import React from 'react';
import './App.css';
// import { HelloWorld } from './components/01-HelloWorld/HelloWorld';
// import { CustomHelloWorld } from './components/02-CustomHelloWorld/CustomHelloWorld';
// import { Toggle } from './components/03-Toggle/Toggle';
import { Countdown } from './components/04-Countdown/Countdown';

function App() {
	return (
		<div className="App">
			{/* <HelloWorld /> */}
			
			{/* <CustomHelloWorld age={7} type="German Shepard" /> */}
			
			{/* <Toggle /> */}
			
			<Countdown name="Pigletshvily" />
		</div>
	);
}

export default App;
