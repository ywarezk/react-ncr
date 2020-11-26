# React Components

In this lesson we will drill down and focus on the tools react gives us for creating UI Components

## Lesson Plan

- Function component
- Class components
- Props
- State
- Lifecycle hooks

## Summary

```
npx create-react-app <project-name> --template typescript
```

```
npm start
```

- Every component can get props to customize the behaviour of the component
- Every component can manage a private state and draw something dynamic based on that state
and also change the state when some action happens


## EX communicating with a server

In most of the websites you will create with React you will have a backend server that you will need to communicate with.  
That server usually communicates with the client with one of the common communication protocols.  
In this EX we will practice communicating with a `REST server`.  

1. Create a new project using `create-react-app`
2. Create a component called `TodoList`
3. When initiated that component should fetch data from a REST server and display that data in a `ul-li` list.
4. The server is located in the following URL:

https://nztodo.herokuapp.com/api/tasks/?format=json

