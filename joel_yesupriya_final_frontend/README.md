This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Description
The Super Health project is a back-end database linked to a front-end user-interface. The front-end allows a user to read, create, update
and delete information inside of a database. The types of information include patients and encounters.

## Starting-up the Database and UI
The first thing to be done is to start-up Docker and run this command:

"docker run -d -e POSTGRES_USER=user -e POSTGRES_PASSWORD=password123 --name myDb -p 5432:5432 postgres"

This will start up Docker, which will allow for the API to run. The appropriate API backend can be cloned from this address: 
<br />
https://gitlab.catalyt.es/jyesupriya/joel_yesupriya_final_backend
<br />
Open the "src" folder of the API package in Intellij to access the "DemoRunner" class. Right click this class and hit "Run" to start-up the database- which will now run over port 8080. 

Next, the database needs to be populated using PGAdmin and a dataloading file. Open up PGAdmin and access the "myDb" server. The username is "user" and the password is "password123".
Do this to navigate to the "Patient" table:

myDb > Databases > postgres > Schemas > public > Tables > patient
<br />

Click on "patient" and then "Query Tool" inside of the "Tools" tab. Hit the folder icon for opening and open the file called "Final Project Data Load" located in the "joel_yesupriya_final_backend"
folder. Then, run the data load by hitting the lightning icon.

<br />
Finally, the frontend needs to be cloned and run. The frontend can be cloned from this address:
<br />
https://gitlab.catalyt.es/jyesupriya/joel_yesupriya_final_frontend
<br />
Navigate to the "frontend" folder of the UI package and open up GitBash here. Run the command "npm start".
This will start-up the front-end UI, which will run over port 3000.

## Operating the Web Interface
The "npm start" command should have automatically opened a web page called "http://localhost:3000/#/". From here you can view all of the patients and basic details about each of them.
You can either start modifying patient data here or navigate to the additional details page for one of these patients. 
On the home page, data can be modified by creating a new patient, updating an existing patient, or deleting an existing patient. You will receive error messages if you attempt to post or update with
invalid information. Also, if you attempt to remove a patient while they still have encounters, you will receive an error message instead. This is not allowed. You may need to delete a patients encounters in order to delete
the patient. To do this, you must be on the patient details page. Click the "view" button for a patient to navigate to the patient details page. This page will show additional details and encounters for a patient
based on which patient you clicked "view" for. This page cannot be accessed via the URL.

On the patient details page, you can read, create, update, or remove encounters for the specified patient. Also, that patient's details can also be modified. Once again, if invalid information
is input, error messages will be displayed instead. 

<br />
## Testing
To test this project, open Command Line (cmd) and navigate to the "frontend" folder- the one that has an "src" folder inside of it. Once inside this folder in cmd,
run the following command:
<br />
                               
<br />
This will show coverage for all the different .js and .jsx files involved with this project.
<br />
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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

### Accessing Webpage

http://localhost:3000/

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
