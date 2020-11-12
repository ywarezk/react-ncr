# JSX

In this lessons we will learn additional rules about JSX

```
React.createElement(...)

function Header(){
	return (
		<header>
			<h1>this is the header</h1>
			<img src="..." />
		</header>
	)
}
```


## JSX Rules

1. jsx is translated to 
```
React.createElement
```

React has to on scope

2. file extension should end with `.tsx`

3. one wrapper

4. When using your component use capital letter, when using dom objects use lowercase

```
<Header />
<header></header>
```

5. comments syntax
```
{/* some comment */}
```

6. no reserved words

7. to place js we create { typescript code }

8. class => className, for => htmlFor

## tsconfig.json

```
npx tsc --init
```

```
"jsx": "react"
```

## Lesson Plan

- What is JSX
- Common JSX rules
  - Place in .tsx files
  - Tags in lower case
  - Components in upper case
  - no reserved words
  - React in scope
  - camelCased attributes
  - You can embed Javascript
    - if's
	- for's
	- events
  - styling
  
## EX.

- complete the ex that is placed in the folder `ex-jsx`
- Button event
  - create a component with a button that when you click on the button there is an alert with the text `hello world`
- If
  - Create a component that use `Math.random()` to generate a random number between 0 and 1.
  If the number is greater than 0.5 the component will write `Win`
  otherwise it will write `Loose`
- Loop
  - Create a component that holds an array of strings, of todo tasks.
  The component should iterate on that list and print an unordered ul-li of the items in the list