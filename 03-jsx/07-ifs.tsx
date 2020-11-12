/**
how to do if
 */
 
import React from 'react';
 
localStorage.setItem('token', '34523hoiahljkzxvcljv');
 
/*
- number
- string
- boolean
- falsy - null/ undefined/ ""
- ReactElement / Component
- array that contains the above
*/

if (localStorage.getItem('token')) {
	return 'Pigletshvily';
} else {
	return 'Guest';
}

const someBoolean = localStorage.getItem('token') ? 'Pigletshvily' : 'Guest'
 
function Header() {
	return (
		<div>
			<h1>
				Hello Guest / Pigletshvily
			</h1>
			<h1>
				Hello 
				{
					(function() {
						if (localStorage.getItem('token')) {
							return 'Pigletshvily';
						} else {
							return 'Guest';
						}	
					})()
				}
			</h1>
			
			<h1>
				Hello {localStorage.getItem('token') ? 'Pigletshvily' : 'Guest'} 
			</h1>
			
			<h1>
				Hello {localStorage.getItem('token') || 'Pigletshvily'}
			</h1>
			
			<h1>
				Hello {localStorage.getItem('token') && 'Pigletshvily'}
			</h1>
		</div>
	)
}