import React, { useState } from 'react';
import './App.css';
// import { HelloWorld } from './components/01-HelloWorld/HelloWorld';
// import { CustomHelloWorld } from './components/02-CustomHelloWorld/CustomHelloWorld';
// import { Toggle } from './components/03-Toggle/Toggle';
import { Countdown } from './components/04-Countdown/Countdown';

function App() {
	const [isCountdownVisible, setIsCountdownVisible] = useState(true);
	
	return (
		<div className="App">
			{/* <HelloWorld /> */}
			
			{/* <CustomHelloWorld age={7} type="German Shepard" /> */}
			
			{/* <Toggle /> */}
			
			{/* if  */}
			{
				isCountdownVisible && <Countdown name="Pigletshvily" destroyCb={() => setIsCountdownVisible(false)} />
			}
			
		</div>
	);
}

export default App;
