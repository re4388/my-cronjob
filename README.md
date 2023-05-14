# my cron job

> We talk about a lot of **advanced Node.js and TypeScript** concepts on [the blog](https://khalilstemmler.com), particularly focused around Domain-Driven Design and large-scale enterprise application patterns. However, I received a few emails from readers that were interested in seeing what a basic TypeScript starter project looks like. So I've put together just that.

### Features

- gen vscode ext
- copy all files into dotfile local repo


### TODO
- also git push my local dotfile changes into remote


### db setup (for the first time)

```bash
docker run -d --name pg-dotfile -p 5439:5432 -e POSTGRES_USER="dotfile" -e POSTGRES_PASSWORD="dotfile" -e POSTGRES_DB="dotfile" -d postgres:9.6
 ```

```psql
psql -h localhost -U dotfile dotfile
> CREATE SCHEMA dotfile;
```

### current endpoint

see test.http


### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.
