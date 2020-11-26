import React, { ChangeEvent, FC, ReactElement, useState } from 'react';

interface GenericFormProps {
	initialState: {[key: string]: string},
	render: (
		state: { [key: string]: string }, 
		handleChange: (event: ChangeEvent<HTMLInputElement>) => void
	) => ReactElement
}

export const GenericForm: FC<GenericFormProps> = ({initialState, render}) => {
	
	const [formValues, setFormValues] = useState(initialState)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value
		})
	}
	
	return render(formValues, handleChange);
	
}