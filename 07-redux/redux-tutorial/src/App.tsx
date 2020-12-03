import React from 'react';
import './App.css';
import { SetName } from './user/SetName';
import { DispayName } from './user/DisplayName';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<SetName />
				<DispayName />
			</Provider>
		</div>
	);
}

export default App;
