This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

### Usage

- Signup using valid email id and password
- enter the verification code sent to your email.
- Login using valid email and password
- View list of notes on home page
- Create a note using + create note button
- Enter Text for content description and attach file using file upload button, and click save to save it.
- clicking save will navigate to home page with list of notes
- click on any note to view by notes id and edit mode
- currently edit and delete are work in progress.
- Loading, Validations on forms, Authenticated pages features applied.
- Backend uses AWS serverless api, and all files are saved in S3 bucket.
- Login feature for backend uses AWS Cognito, and auth policiy applied to execute lambda function, dynamodb, and S3.
- This React app uses Router, States, and Aws sdk. The

