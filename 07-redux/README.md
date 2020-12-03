# Redux

State managment library .  

between components. 

## Store

object

the store will hold the state

## state

```
{
	user: {
		firstName: 'Pigletshvily',
		lastName: 'Chaitovsky'	
	},
	
	todo: {
		tasks: []
	}	
}
```

component can register to watch something from the state.

component can read the firstName

component can change the firstName


## EX Redux

- Create a new app using `create-react-app`
- Install the following libraries:
  - redux
  - react-redux
  - @reduxjs/toolkit
- Install those libraries type declaration as well
- Your redux should manage the following data

```
{
	hello: {
		message: 'hello world'
	}
}
```

- Create a slice that will manage that data
- Create a component that will read the data
- Create a component that will update the data.

