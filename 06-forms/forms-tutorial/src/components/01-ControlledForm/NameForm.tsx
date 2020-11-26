import React, { ChangeEvent, FC, useState } from 'react';

// controlled form
// Formik
export const NameForm: FC = () => {
	const [value, setValue] = useState('Pigletshvily');
	// const [disabled, setDisabled] = useState(false);
	
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	}
	
	const handleSubmit = (event: any) => {
		console.log(value);
		
		event.preventDefault();
		event.stopPropagation();
	}
	
	return (
		<form onSubmit={handleSubmit}>
			<input 
				value={value} 
				onChange={handleChange}
				type="text" 
				name="dogName" 
			/>
			<button type="submit">
				Submit
			</button>
		</form>
	)
}