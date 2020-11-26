import React, { FC } from 'react';

export const Foo: FC = () => {
	if (Math.random() > 0.5) {
		throw new Error();
	}
	
	return (
		<h1>
			foo bar
		</h1>
	)
}