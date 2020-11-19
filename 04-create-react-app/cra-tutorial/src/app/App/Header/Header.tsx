import React from 'react';
import piglet from './pigletshvily.png';

export function Header() {
	return (
		<header>
			<h1>
				I'm the header
			</h1>
			<img src={piglet} />
		</header>
		
	)
}