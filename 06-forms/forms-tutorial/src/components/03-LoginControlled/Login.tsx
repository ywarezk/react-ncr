import React, { ChangeEvent, FC, useState } from 'react';

// Controlled
export const Login : FC = () => {
	const [formValues, setFormValues] = useState({
		email: 'piglet@nerdeez.com',
		password: '12345678',
	})
	
	/*
	const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			email: event.target.value
		})
	}
	
	const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			password: event.target.value
		})
	}
	*/
	
	const handleChange = (event: any) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value
		})
	}
	
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