Welcome on project Les Drivers Lyon !

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### Install dependencies

```sh
npm i -g yarn
yarn
```

### Environement variables

```
cp .env.example .env
```

And then change variables inside `.env` to match your own environment.
If you ever want to add an environment variable, please add it to `.env.example`.

### Setup the database

```sh
yarn run resetDB
yarn run showDB
```

### Run the development server

```bash
yarn run dev
```

## Run the tests

### Run a server in test mode

(so that some external services can be mocked)

```sh
yarn run dev:test
```

### Run tests in CLI

```sh
yarn run test
```

### Run tests with the Cypress GUI

```sh
yarn run test:gui
```

