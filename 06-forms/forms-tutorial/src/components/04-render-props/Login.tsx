/**              state, handleChange
  GenericForm <------------------------> Login
				   initial state

render props
login will place
 
<GenericForm 
	initialState={ {email: 'piglet@nerdeez.com', password: '12345678'} } 
	render={
		(state, handleChange) => {
			return (
				<form>
				....
				</form>
		}
	}
/>

1. import {SomeComponent} from 'some-library'

return (
	<SomeComponent 
		config1={} 
		config2={}  
		render={(someProblemSolved) => {
			return (
				<div>
				...
				</div>
			)
		}}
	/>
)

<SomeComponent
		config1={}
		config2={}		
>
{
	(someProblemSolved) => {
		return (
			<div>
			...
			</div>
		)
	}
}
</SomeComponent>

<SomeComponent
		config1={}
		config2={}
>
	<div>
	...
	</div>
</SomeComponent>
 
 
 */

import React, { ChangeEvent, FC, useState } from 'react';
import { GenericForm } from './GenericForm';

// Controlled
export const Login: FC = () => {
	const handleSubmit = (formValues: {[key: string]: string}, event: any) => {
		console.log(formValues);

		event.preventDefault();
	}

	return (
		<GenericForm
			initialState={{ email: '', password: '' }}
			render={
				(state, handleChange) => {
					return (
						<form onSubmit={(event) => handleSubmit(state, event)}>
							<input
								value={state.email}
								onChange={handleChange}
								type="email"
								name="email"
								placeholder="Enter your email"
							/>
							<input
								value={state.password}
								type="password"
								placeholder="Enter your password"
								name="password"
								onChange={handleChange}
							/>
							<button type="submit">
								Login
							</button>
						</form>
					)
				}
			}
		/>
	)
}