/**

function useGenericForm(initialState) {
	const [formValues, setFormValues] = useState();

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value
		})
	}
	
	return [formValues, handleChange];
	
	return { formValues, handleChange}
}

Login:

const [] = useGenericForm({
	email: '',
	password: ''
})

import { useSomething } from 'some-library'

const [] = useSomething(config1, config2)

 */

import React, { ChangeEvent, FC, useState } from 'react';
import { useGenericForm } from './generic-form.hook';

export const Login: FC = () => {
	const [formValues, handleChange] = useGenericForm({
		email: '',
		password: ''
	})
	
	const handleSubmit = (event: any) => {
		console.log(formValues);

		event.preventDefault();
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input
				value={formValues.email}
				onChange={handleChange}
				type="email"
				name="email"
				placeholder="Enter your email"
			/>
			<input
				value={formValues.password}
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