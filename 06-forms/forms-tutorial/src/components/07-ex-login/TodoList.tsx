/**
 * Grab a todo list from a server
 * The server will only authorize request with the JWT token we got
 */
 
import React, { FC, useEffect, useState } from 'react';

interface TodoListProps {
	jwtToken: string | null;
}

interface Todo {
	id: number;
	title: string;
	description: string;
}

export const TodoList: FC<TodoListProps> = ( {jwtToken} ) => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	
	useEffect(() => {
		if (!jwtToken) return;
		
		fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
			headers: {
				'Authorization': `Bearer ${jwtToken}`
			}
		})
		.then(
			(response) => {
				return response.json()
			}
		)
		.then((json) => {
			setTodoList(json);
		})
	}, [jwtToken])
	
	
	return (
		<div>
			<h1>Todo List</h1>
			<ul>
				{
					todoList.map((singleTodoItem) => {
						return (
							<li key={singleTodoItem.id}>
								<h1>{singleTodoItem.title}</h1>
								<p>
									{singleTodoItem.description}
								</p>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
	
}