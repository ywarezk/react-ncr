import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { NameForm } from './components/01-ControlledForm/NameForm';

import { NameForm } from './components/02-UnControlledForm/NameForm';
import { DogName } from './components/06-Formik/Login';

function App() {
	return (
		<div className="App">
			<h1>
				ControlledForm
	  		</h1>

			{/* <NameForm /> */}

			<h1>
				UnControlledForm
	  		</h1>
			  
			{/* <NameForm /> */}
			
			<h1>
				Formik
			</h1>
			
			<DogName />
		</div>
	);
}

export default App;
