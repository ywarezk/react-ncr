import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import { NameForm } from './components/01-ControlledForm/NameForm';

// import { NameForm } from './components/02-UnControlledForm/NameForm';
// import { DogName } from './components/06-Formik/Login';
import { Login } from './components/07-ex-login/Login';

function App() {
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
			
			<Login />
		</div>
	);
}

export default App;
