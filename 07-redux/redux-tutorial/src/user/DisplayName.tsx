/**
 * Show the firstName of the user
 * firstName is saved in redux
 */
 
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { MyState } from '../store';

export const DispayName: FC = () => {
	const firstName: string = useSelector<MyState, string>((state) => {
		return state.user.firstName;
	})
	
	return (
		<h1>
			{firstName}
		</h1>
	)
}