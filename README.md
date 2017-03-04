# Express + Browserify + React + Redux Boilerplate

Since I keep setting the same packages again and again just to get a project
going, might as well create boilerplate for this to minimise the effort in
the future.

## Directory Structure

As with any boilerplates, it's really nice to know where things are.
So, without further ado, here is the directory structure overview of the
boilerplate:

```
.
|-- client                # Contains all the browser code.
|   |-- main.css          # Main CSS to rule them all.
|   `-- main.js           # Browser entry point.
|-- public                # Contains all files that a browser can access.
|   |-- bundle.js         # Generated browserify bundle.
|   |-- bundle.js.map     # Source map for bundle.js.
|   |-- bundle.min.js     # Production quality browserify bundle.
|   `-- bundle.min.js.map # Source map for bundle.min.js.
|-- routes                # All the RESTful routing code is in here.
|   `-- index.js          # Routes '/'.
|-- scripts               # Admin scripts are in here.
|   `-- www               # Sets up the Node.js express server.
|-- tests                 # All the tests will be in here.
|   `-- client            # Make sure each directory matches the right tests.
|       `-- main.test.js  # e.g. Tests for client/main.js.
|-- views                 # Contains pug template files.
|   |-- error.pug
|   |-- index.pug
|   `-- layout.pug
|-- app.js                # Express server app.
|-- .editorconfig
|-- .eslintignore
|-- .eslintrc.json
|-- .gitignore            # Typical Node.js ignores + some custom ones.
|-- nodemon.json
|-- package.json
|-- yarn.lock             # It's Yarn. It's 2017. Use it to lock dependencies.
`-- README.md
```

## Installation

```
yarn install
```
or

```
npm install
```

Both works, but I prefer `yarn`.

## Environment Variables


### NODE_ENV

```
export NODE_ENV=development
```
or
```
export NODE_ENV=production
```

### DEBUG

```
export DEBUG=boilerify-react-redux:*
```

If you want that debugging goodness on the console.

### PORT

```
export PORT=8080
```

Set the port that the server will listen to.
Defaults to `3000`.

## Commands

```
npm start
```
Bundles and minifies your code (server and client) to /public.
It then starts the app in a pm2 environment.

```
npm run develop
```
Bundles and watches your unminified code (server and client) to /public.
It then starts the app in a nodemon environment.

```
npm test
```
Guess what it does...
