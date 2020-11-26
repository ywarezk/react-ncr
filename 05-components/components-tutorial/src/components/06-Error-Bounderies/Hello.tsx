/**
<Hello>
	<h1></h1>
</Hell>
 */

import React, { FC } from 'react';

export const Hello: FC = () => {
	if (Math.random() > 0.5) {
		throw new Error();
	}
	
	return (
		<h1>
			hello world
		</h1>
	)
}