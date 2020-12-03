/**
 * Will create the redux store that will hold the state managment of our app
 */
 
import { configureStore } from '@reduxjs/toolkit';
import { userReducer, UserState } from './user/user.slice';
import { combineReducers } from 'redux';
import { TodoState, todoSlice } from './todo/todo.slice';


export interface MyState {
	user: UserState;
	todo: TodoState
}

export const store = configureStore<MyState>({
	reducer: combineReducers({
		user: userReducer,
		todo: todoSlice.reducer 
	}),
	
	// the state is immutable
	// preloadedState: {
	// 	user: {
	// 		firstName: 'Pigletshvily',
	// 		lastName: 'Chaitovsky'
	// 	},

	// 	// todo: {
	// 	// 	tasks: []
	// 	// }
	// } 
})