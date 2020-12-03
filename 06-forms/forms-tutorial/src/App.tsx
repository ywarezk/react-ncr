import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { NameForm } from './components/01-ControlledForm/NameForm';

// import { NameForm } from './components/02-UnControlledForm/NameForm';
// import { DogName } from './components/06-Formik/Login';
import { Login } from './components/08-context/Login';
import { TodoList } from './components/08-context/TodoList';
import {JwtContext} from './components/08-context/jwt.context';

function App() {
	const [token, setToken] = useState<string | null>(null);
	
	return (
		<div className="App">
			<h1>
				ControlledForm
	  		</h1>

			{/* <NameForm ref={stamRef} /> */}

			<h1>
				UnControlledForm
	  		</h1>
			  
			{/* <NameForm /> */}
			
			<h1>
				Formik
			</h1>
			
			{/* <DogName /> */}
			
			<h1>
				Login EX
			</h1>
			
			{/* <Login cb={setToken} />
			<TodoList jwtToken={token} /> */}
			
			<h1>
				Context
			</h1>

			{/* context holds data */}
			{/* that data is shared between the component wrapped in context */}
			{/* that data can be changed between the component wrapped in context */}
			{/* when data is changed compnent under will rerender */}

			{/* <Context data={someData}> */}
			
			<JwtContext.Provider value={ { token: token, setToken: setToken } } >
				
				{/* <UserContext> */}
					
					<Login /> {/*change the data*/}
					<TodoList /> {/*can access the data*/}
					
				{/* </UserContext> */}
				
			</JwtContext.Provider>
			
			
			{/* </Context> */}
		</div>
	);
}

export default App;
