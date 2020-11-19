import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Header } from './Header/Header';

export function App() {
	return (
		<div className="App">
			<Header />

			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <img src="logo192.png" /> */}
				<p>
					 hello world
       			 </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        		</a>
			</header>
		</div>
	);
}
