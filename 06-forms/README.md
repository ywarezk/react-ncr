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

## Ex. 

