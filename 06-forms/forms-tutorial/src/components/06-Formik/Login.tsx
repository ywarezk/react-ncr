/**
 npm install formik
 
 import { Formik, Form, Field } from 'formik';
 
 <Formik  >
	{
		(someProblemSolvingForForms) => {
			return (
				<form>
					<input value={} onChange={}
				</form>
			)
		}
	}
 </Formik>
 
 <Formik>
	<Form>
		<Field
	</Form>
 </Formik>
 
 controlled form
 */
 
import React, { FC } from 'react';
import { Formik, Form, Field } from 'formik';

export const DogName: FC = () => {
	const handleSubmit = (values: any) => {
		// {dogName: '...'}
		console.log(values);
	}
	
	return (
		<Formik 
			initialValues={ {dogName: 'Pigletshvily/Sweetness fluffy belly'} } 
			onSubmit={handleSubmit}
		>
			<Form>
				<Field
					type="text"
					name="dogName"
					placeholder="Enter your favorite dog name"
				/>
				<button type="submit">
					Submit
				</button>
			</Form>
		</Formik>
		
	)
}
 
