# create-react-app

We will use `create-react-app` to bootstrap a new React application.

## CheatSheet

```
npx create-react-app <project-name> --template typescript
```

## Start developing

```
npm start
```

## See the webpack configs

```
npm run eject
```

## Build and deploy

```
npm run build
```

## Lesson Plan

- Creating a new project
- Going over the files
- Recommendation how to arrange the files
- Recommendation how to arrange the styling
- Adding SCSS
- Webpack
- Adding images
- Installing bootstrap
- Building
- Deploying

## EX Image

The goal of this task is to familiarize you with how webpack works.  
You job in this task is to create two components.  
Both of the components display an image on the screen.  
Both of the images should be local images and should be placed in the project files.  

1. You should start a new project using `create-react-app`  
2. Place an image in the `public` dir
3. Create the component `PublicImage` that displays the image from the `public` dir
4. Create another component `LocalImage` and create a folder for that component. In the component folder place an image and your component should display that image.

It's wise to not place all the images in one `public` folder.  
If the image is only used in one component, it should be placed in the component folder.  

## EX Styling

The goal of this is to understand how webpack works with styling, and how styling should be arranged in your react application.

1. You should start a new project using `create-react-app`  
2. Change all the styling files that you have in your app from `.css` to `.scss`
3. Using `npm` install `node-sass`
4. Create a directory in your project called `styles` in that directory you will have your global app styling project
5. In the `styles` directory, create the file `main.scss` this will be the entry point file of your global styling project
6. In your `styles` directory, create the file `_buttons.scss` that will hold css designs of the button in your app.
7. Add styling of your choice to style the button (button styles usually place as global app styling)
8. Using npm install `bootstrap`
9. In your `main.scss` add an import to `bootstrap` css file.

```
@import "~bootstrap/dist/css/bootstrap.css";
```

10. Create a component called `SomeButtons` and in that component display a few buttons that you designed.
11. Create also a local styles for your component and place so design rules to position the buttons in your component
12. Create the local styles of `SomeButton` as a css module: https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

## EX Deploy

The goal of this EX. is to practice deployment of your app.

1. You should start a new project using `create-react-app`  
2. Try to deploy your project to github pages using the following article:

https://create-react-app.dev/docs/deployment/

## EX.

- Create a new project using `create-react-app`
- Create the login app but split every component to a different file
  - App
    - Header
	- LoginForm
	- Footer

