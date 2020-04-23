## Build server

## Userstories

- As a user who is sitting at home learning things, I want to see a joke, so I can be entertained
- As child I who wants to be entertained, I want to see an age appropriate joke, so my childhood is not ruined

## Business logic

- We want to use this app in the browser

## Plan

## Setup

- [x] make folder
- [x] start tracking our work in git
- [] commit our work as we go
- [x] if we use package, we want to .gitignore our node_modules
- [x] initialize package.json (npm init) -> so we can install libraries
- [x] install the package we need: express
- [x] configure our express
  - [x] import the library and use it
  - [x] set a port
  - [x] make our server listen
  - [x] make a start script in package.json

## Building a feature

- [x] define a route, the user can send requests to
- [x] we take the input from the `request` that user sent us (request.params)
- [x] send a response to the user with a joke

## Push our code to github

- [x] create a repository on github (creating a remote)
- [x] add a remote repository to our local repository (git remote add git@github....)
- [x] push it to the limit / push it good, real good / push your changes

## How to restart your server automatically

```bash
npm install -D nodemon
```

make a script in package.json

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js",
    "dev": "npx nodemon index.js"
  },
```

or just run

```bash
npx nodemon index.js
```
