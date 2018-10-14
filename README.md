# ledger-app
Client App for use with [ledger-api](https://github.com/jstiehl/ledger-api). This app is a simple ledger that allows you to create an account, login, logout, post transactions and view a ledger of your transactions as they are posted. 

NOTE: ledger-api server must be running for the client app to work (Error notifications still need to be added to client to notify users if ledger-api server is not running). Also, server data is currently just being stored in memory (Javascript object). Therefore there is no persistence of data if server is stopped and restarted

This app is built off of the [Create React App](https://github.com/facebookincubator/create-react-app) package.

#Running App
To run the app

1. Clone this repo locally.
2. Navigate to the root directory of the project on your local machine.
3. Run `npm install` to install dependencies
4. Assuming that ledger-api server is running (instructions for that setup are provided in the [ledger-api](https://github.com/jstiehl/ledger-api) repo), you can run the app locally by running the `npm start` command in the root directory of this project.  Browser should open up automatically but if it doesn't you can navigate to `'http://localhost:3000` to launch the app in your browser.
