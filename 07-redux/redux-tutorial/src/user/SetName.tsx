/**
 * Change the first name
 */
 
 
import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { setFirstName } from './user.slice';

interface FirstNameForm {
	firstName: string;
}

export const SetName: FC = () => {
	// store.dispatch(action)
	// store.dispatch({type: '...', payload: ''})
	const dispatch = useDispatch();
	
	const handleSubmit = (values: FirstNameForm) => {
		// store.dispatch({type: 'SET_FIRST_NAME', payload: 'some new name from form'})
		dispatch(setFirstName(values.firstName))
	}
	
	return (
		<Formik
			initialValues={ {firstName: '' } }
			onSubmit={handleSubmit}
		>
			<Form>
				<Field type="text" name="firstName" />
				<button type="submit">Submit</button>
			</Form>
		</Formik>
	)
}