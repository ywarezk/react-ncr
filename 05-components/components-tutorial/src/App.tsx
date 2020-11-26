import React, { useState } from 'react';
import './App.css';
// import { HelloWorld } from './components/01-HelloWorld/HelloWorld';
// import { CustomHelloWorld } from './components/02-CustomHelloWorld/CustomHelloWorld';
// import { Toggle } from './components/03-Toggle/Toggle';
import { Countdown } from './components/04-Countdown/Countdown';
import { TodoList } from './components/05-ExTodoList/TodoList';

function App() {
	const [isCountdownVisible, setIsCountdownVisible] = useState(true);
	
	return (
		<div className="App">
			<div className="container">
				<div className="row">
					
					<div className="col-xs-12 col-lg-6">
						
					</div>
					
				</div>
			</div>
		
			{/* <HelloWorld /> */}
			
			{/* <CustomHelloWorld age={7} type="German Shepard" /> */}
			
			{/* <Toggle /> */}
			
			{/* if  */}
			{/* 			
			{
				isCountdownVisible && <Countdown name="Pigletshvily" destroyCb={() => setIsCountdownVisible(false)} />
			}
			 */}
			 
			 <TodoList />
		</div>
	);
}

export default App;
