# NPM

node package manager
we will use it to install packages

## Install Package

- install package globally

```
npm install -g @angular/cli
```

- install package locally

```
npm init --yes
npm install react
npm install react-dom
npm install
```

# NPX

node package executer
some libraries extend our cmd with more commands

- execute from `node_modules/.bin`
- install and execute from cache

```
npx http-server
```


## CheatSheet

init npm and create **package.json**

```
npm init --yes
```

install a package

```
npm install <some-package>
```

After installing typescript create a **tsconfig.json**  
We need it to configure typescript - how typescript should work
```
npx tsc --init
```

teach typescript about a javascript library
```
npm install @types/react -D
```

This package allows us to run our typescript code in node
```
npm install ts-node
npx ts-node <some-file-to-run.ts>
```

compile our typescript to javascript
```
npx tsc
npx tsc <some-file-to-compile.ts>
```
