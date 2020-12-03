import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import { Home } from './components/01-route/Home';
import { About } from './components/01-route/About';
import { Error404 } from './components/02-Switch/Error404';
import { Question } from './components/05-pass-params/Question';

/**
 <GenericForm 
	render={(strong1) => {
		
		return (
			<form>
			
		)
		
	}}
 />
 
 <GenericForm>
 {
	 () => {...}
 }
 </GenericForm>
 
 <Formik>
	<Form>
	</Form>
 </Formik>
 */

function App() {
	return (
		<div className="App">
			<h1>Route</h1>

			<p>
				Will display a component if the path match
	  		</p>
			  
			<nav>
				<ul>
					<li>
						<Link to="/">
							Home
						</Link>
					</li>
					<li>
						<Link to="/about">
							About
						</Link>
					</li>
				</ul>
			</nav>

			<Switch>
				<Route exact path="/">
					<Home />
				</Route>

				<Route exact path="/about">
					<About />
				</Route>
				
				<Route exact path="/question/:questionId">
					<Question />
				</Route>
				
				<Route >
					<Error404 />
				</Route>
			</Switch>
			
		</div>
	);
}

export default App;
