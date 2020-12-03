
import { Reducer, AnyAction, ActionCreator } from 'redux';
// import { createSlice } from '@reduxjs/toolkit';

export interface UserState {
	firstName: string,
	lastName: string
}



// Reducer
// manage part of the state
// manage the user part of the state
// need to return new user state
export const userReducer: Reducer<UserState> = (userState = {
	firstName: 'Pigletshvily',
	lastName: 'Chaitovosky'
}, action): UserState => {
	switch(action.type) {
		case 'SET_FIRST_NAME': 
			return {
				...userState as UserState,
				firstName: action.payload
			}
		default:
			return userState
	}
}

// action redux

/**

{
	type: 'SET_FIRST_NAME',
	payload: 'sweetness'
}

 */
 
export const setFirstName: ActionCreator<AnyAction> = (newName: string): AnyAction  => {
	 return {
		 type: 'SET_FIRST_NAME',
		 payload: newName
	 }
 }