# Typescript

We will learn to develop React using Typescript. 
Let's go over some basic typescript.

## Install Typescript

### Variable declarations

```
           scope           number of assignments
var       functional          inifinite

let         {}               infinite

const       {}               1
```

## Lesson Plan

- Variable declarations
- Types
- single line if
- array map
- functions
- classes
- interface
- generic types
- modules
- spread operator
- Promise

## EX.

- create a new folder in your computer `ex-server`
- init npm in that folder
- install typescript in that folder
- install a library called `axios` that can send an ajax request to a server
- we have a server in the following url: https://nztodo.herokuapp.com/api/tasks/?format=json
- you can place that url in the browser to see what the server returns.
- create a typescript file: `get-from-server.ts`
- Use axios to send an ajax request to that server.
- print the response data of the server to the console.
- compile the file you created:

```
npx tsc get-from-server.ts
```

- run your code:

```
node get-from-server.js
```

- the result of running the file should be the response data printed to `console.log`