/**

component with form
form - email grab user email
form - password grab user password

send them to a server

 */
 
import React, { FC } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface LoginValues {
	email: string;
	password: string;
}

interface LoginProps {
	cb: (toke: string) => void;
}

const LoginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Invalid email')
		.required('Required')
		.min(2, 'too short')
		.max(100, 'too long'),
	password: Yup.string().required('Required').min(2, 'too short').max(100, 'too long'),
});

export const Login: FC<LoginProps> = ( {cb} ) => {
	
	/**
	 * Formik will call it when you submit the form
	 * Formik will send what the user typed to this function
	 * @param values 
	 */
	const handleSubmit = async (values: LoginValues) => {
		console.log(values);
		const response = await fetch(
			'https://academeez-login-ex.herokuapp.com/api/users/login',
			{
				method: 'POST',
				body: JSON.stringify({
					email: 'yariv@nerdeez.com',
					password: '12345678'
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			}
		)
		const json = await response.json();
		// {token: 'asdfasdf@2423423rSFasfdasf'}
		cb(json.token);
		console.log(json);
	}
	
	return (
		<Formik
			initialValues={ {email: '', password: ''} }
			onSubmit={ handleSubmit }
			validationSchema={LoginSchema}
		>
			<Form>
				<Field type="email" name="email" placeholder="Enter your mail" />
				<ErrorMessage name="email" />
				<Field type="password" name="password" placeholder="Enter your password" />
				<ErrorMessage name="password" />
				<button type="submit">
					Login
				</button>
			</Form>
		</Formik>
	)
}