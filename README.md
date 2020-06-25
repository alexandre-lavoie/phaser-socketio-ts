# phaser-socketio-ts

This is a template repo for Phaser, SocketIO, and Typescript. This repo was configured to make it as simple as possible to develop a game using the technologies.

## Getting Started

Install the latest [NodeJS](https://nodejs.org/en/) environment. Run the following command:

```
npm install
```

## Development

A development instance of the server can be created using the following command(s):

```
Windows CMD: 

set NODE_ENV=development
npm start

Linux/Mac:

NODE_ENV='development' npm start
```

The server should be running on http://localhost. Everything is configured correctly if "Connected" is displayed.

NOTE: Wait for `[nodemon] clean exit - waiting for changes before restart` to assure the build is complete. 

## Production

All the build is handled with the following command:

```
npm run build
```

Once complete, run the following command(s) in the root of the `build` directory:

```
Windows CMD: 

set NODE_ENV=production
node ./server/index.js

Linux/Mac:

NODE_ENV='production' node ./server/index.js 
```

The server should be running on the machine's port 80.

## Docker

A Dockerfile was created for the production server. Use the following command to start an instance:

```
docker-compose up
```