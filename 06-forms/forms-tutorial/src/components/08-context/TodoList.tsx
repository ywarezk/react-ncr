/**
 * Grab a todo list from a server
 * The server will only authorize request with the JWT token we got
 */
 
import React, { FC, useEffect, useState, useContext } from 'react';
import { JwtContext } from './jwt.context';

interface Todo {
	id: number;
	title: string;
	description: string;
}

export const TodoList: FC = ( ) => {
	const [todoList, setTodoList] = useState<Todo[]>([]);
	const {token} = useContext(JwtContext);
	
	useEffect(() => {
		if (!token) return;
		
		fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
			headers: {
				'Authorization': `Bearer ${token}`
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
	}, [token])
	
	
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