/**
 Create a reducer that will manage the todo key in our state
 
 todo: {
	 tasks: []
 }
 
 action that will change the tasks array - setTasks {type: 'SET_TASKS', payload: [{...}, {...}]}
 
 */
 
// redux best practices
import { createSlice } from '@reduxjs/toolkit';

export interface TodoState {
	tasks: any[];
}

// { reducer: todoReducer, actions: [ setTasks, addTask]}
export const todoSlice = createSlice<TodoState, any>({
	name: 'todo',
	initialState: {
		tasks: []
	},
	reducers: {
		setTasks: (state, action) => {
			state.tasks = action.payload;
		},
		addTask: (state, action) => {
			state.tasks.push(action.payload);
		}
	}
})