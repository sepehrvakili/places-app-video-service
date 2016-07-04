# Microservice Name
places-app-video-service

## Table of Contents
1. [Getting started](#getting-started)
2. [Tech](#tech)
3. [Database Schema](#database-schema)
4. [Team](#team)
5. [Contributing](#contributing)

## Getting started

Clone and install dependencies:
```sh
$ npm install
```
Create `env/development.env` and set environment variables. Follow `env/example.env`.

add any additional needed commands and instructions here

```sh
$ npm start
```

#### Testing

Configure the environment variable `NODE_ENV` prior to running tests.

 ```sh
$ export NODE_ENV=development
$ npm test
```

## Tech
> node / express server
> node clusters for workers

## Database Schema
> Currently none.

## Directory Layout
> Use the diagram below as an example and starting point
```
├── /env/                       # Environment variables
├── /node_modules/              # 3rd-party libraries and utilities
├── /dist/                      # Public distribution folder
│   ├── /images/                # Images
│   ├── /compressedImages/      # Compressed Images
│
├── /server/                    # Server source code
│   ├── /httpServer/            # Express server
│     ├── /config/              # Server configs
│       ├── middleware.js       # Server middleware
│       ├── routes.js           # Server routes
│     ├── server.js             # Start the server
│   ├── /imageWorker/           # Image worker
│       ├── worker.js           # Start worker
│   ├── /uploadWorker/          # Upload worker
│       ├── worker.js           # Start worker
│   ├── master.js               # Start entire server, with image worker and upload worker clusters
│
├── /test/                      # Server and client side tests
│   ├── /client/                # Client side tests
│   ├── /server/                # Server side tests
│   ├── /data/                  # Holds seed & dummy data
└── package.json                # List of 3rd party libraries and utilities to be installed
└── .eslintrc                   # ESLint settings
```

## Team
  - Product Owner:            [Adam Lessen](https://github.com/lessenadam)
  - Scrum Master:             [Sepehr Vakili](https://github.com/sepehrvakili)
  - Development Team Members: [Jordan Tepper](https://github.com/HeroProtagonist), [Sepehr Vakili](https://github.com/jinsoocha), [Andrew Phavichitr](https://github.com/aphavichitr), [Adam Lessen](https://github.com/lessenadam)

## Contributing
See [CONTRIBUTING.md](https://github.com/places-app/places-app-web/blob/master/docs/_CONTRIBUTING.md) for contribution guidelines.