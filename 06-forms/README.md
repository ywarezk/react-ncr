# Dealing with forms using React

In this lesson we will learn best practices for dealing with forms using React

## Lesson Plan

- Controlled form
- Uncontrolled form
- Ref
- RenderProps
- Custom hooks
- Formik
- Validation
- Custom controls

## EX. Custom hook

- create a custom hook called `useTodo`
- This custom hook will cause a component to send a request upon init to a server located at the following url:  
`http://nztodo.herokuapp.com/api/tasks/?format=json`  
- The custom hook will grab the data from the server and for every component that use the hook will place in the state the array the server returns.  
- The hook should also return a function to refetch the list:

```
const useTodo : [Todo[], () => void]
```

## EX.

In this EX. you will learn how JWT works in React application.
- Create a new application using `create-react-app`
- Create the following components (as functions)
  - `App`
  - `TodoList`
  - `Login`
- The `Login` will contain a form with an email field and a password field.
- Manage the form binding and validation using `Formik`
- The email and password should be sent to the following server

```
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
```
- if you send the following data the server will return a JWT token.
- Pass that token to the `TodoList`, after getting the token the `TodoList` should fetch the data from the server:

```
fetch('https://academeez-login-ex.herokuapp.com/api/tasks', {
				headers: {
					'Authorization': `Bearer ${token}`
				}
			})
			.then(
				(response) => {
					return response.json()
				}
			)
			.then((json) => {
				setTodos(json);
			})
```
- the server will only return the data upon a valid jwt token

