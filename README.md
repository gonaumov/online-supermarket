This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## This is a task which I did for [Gusto](https://www.gousto.co.uk/). I didn't receive any feedback
## and there was need the human resources specialist which I was working to write to them. I will 
## not comment this. I am happy I didn't write tests because the time which I spend would be much long
## and the result will be the same. In master branch you can find the task as it was given to them. 
## There was need to install [Allow-Control-Allow-Origi](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi) 
## from Chrome web store in order to use crossdomain fetch. This is currently not possible even with this add-on. 
## In the static-without-any-version branch you can find improved version which can be started locally. It just 
## requests json files from filesystem. 


I have implemented all requirements except tests. The application is divided in 
four components - Home, Menu, Products and SearchInput. I use redux and first 
designed the shape of the state and develop only with mock data. I needed to 
change implementation a little bit because firstly my state shape was
designed to maintain only one group

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
