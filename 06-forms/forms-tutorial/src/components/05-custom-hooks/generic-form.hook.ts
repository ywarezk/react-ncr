import { ChangeEvent, useState } from "react";

const a: { [key: number]: string | boolean} = {
	50: true,
	10: 'sweetness',
}

/**
 * 
 * @param initialState 
 */
export function useGenericForm<T = { [key: string]: string }>(initialState: T): [T, (event: ChangeEvent<HTMLInputElement>) => void] {
	
	const [formValues, setFormValues] = useState(initialState);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormValues({
			...formValues,
			[event.target.name]: event.target.value
		})
	}

	return [formValues, handleChange];
}