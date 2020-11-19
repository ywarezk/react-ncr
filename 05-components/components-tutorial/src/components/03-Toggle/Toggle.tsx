/**
 * this component will display hello world
 * will also contain a button clicking the button will toggle the text
 * 
 */

import React, { FC, useState } from 'react';

interface User {
	firstName: string;
	lastName: string;
}

export const Toggle: FC = () => {
	// [isVisible]
	// [true/false, setIsVisible(true/false)]
	/*
	const tuple = useState(true);
	const isVisible: boolean = tuple[0];
	const setIsVisible: (newIsVisible: boolean) => void = tuple[1];
	*/
	
	const [isVisible, setIsVisible] = useState(true);
	
	// const [isEnabled, setIsEnabled] = useState(false);
	
	const [idanUser, setIdanUser] = useState<User | null>(null);
	
	const toggleVisibility = () => {
		setIsVisible(!isVisible);	
		
		// isVisible = false;	
	}
	
	const login = () => {
		setIdanUser({
			firstName: 'Pigletshvily',
			lastName: 'Chaitovski'
		});
	}
	
	return (
		<div>
			<h1>
				Hello {idanUser === null ? 'Guest' : `${idanUser?.firstName} ${idanUser?.lastName}` }
			</h1>
		
			{
				isVisible && (
					<h1>
						Hello World
					</h1>
				)
			}
			<button onClick={toggleVisibility}>
				Toggle visibility
			</button>
			
			<button onClick={login}>
				Login
			</button>
		</div>
	)
}