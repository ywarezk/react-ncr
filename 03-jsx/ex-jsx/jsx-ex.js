// import React from 'react';

function Button() {
	
	/**
	 * this function will be called when we click the button
	 */
	const alertHello = () => {
		alert('hello NCR');
	}
	
	return (
		<button onClick={ alertHello }>
			Click me
		</button>
	)
}

function WinLose() {
	const someRandomNum = Math.random();
	
	return (
		<h1>
			{
				someRandomNum > 0.5 ? 'Win' : 'Lose'
			}
		</h1>
	)
}

function TodoList() {
	const todoList = [
		{ title: 'Walk Piglet & Sweetness', id: 1 },
		{ title: 'Play Piglet & Sweetness', id: 2 },
		{ title: 'Feed Piglet & Sweetness', id: 100 },
	]
	
	return (
		<ul>
			{
				todoList.map((todoTask) => {
					return (
						<li key={todoTask.id}>
							{todoTask.title}
						</li>
					)
				})
			}			
		</ul>
	)
}

function App() {
	return (
		<>
			<Button />
			<WinLose />
			<TodoList />
		</>
	)
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);