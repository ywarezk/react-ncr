import React, {useState, useEffect} from 'react';

interface Task {
	id: number;
	title: string;
	description: string;
}


export function TodoList() {
	const [tasks, setTasks] = useState<Task[]>([]);
	
	useEffect(() => {
		fetch('https://nztodo.herokuapp.com/api/tasks/?format=json')
			.then((response) => {
				return response.json();
			})
			.then((tasks) => {
				setTasks(tasks);				
			})
	}, [])
	
	return (
		<ul>
			{
				tasks.map((taskObj) => {
					return (
						<li key={taskObj.id}>
							<h1>
								{taskObj.id} {taskObj.title}
							</h1>
							<p>
								{taskObj.description}
							</p>
						</li>
					)
				})	
			}
		</ul>
	)
}