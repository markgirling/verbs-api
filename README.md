# Verbs Api
A Node.js-powered web API that outputs Spanish verb tables in a JSON format. It uses PostgreSQL to store its data. It has information about 25 of the most frequently used verbs.

## Example Request
To see all the verb forms for the verb 'ser', run the project locally (see the 'How to Run Locally' section below) and make the following request:

```
curl http://127.0.0.1:3000/verb/ser
```

## How to Run Locally

### With Docker
You can start the app with docker-compose:

```
docker-compose up
```

This will build and run two docker containers, one for the web server and one for PostgreSQL.

Once the docker containers are running, you can access the project on localhost on port 3000. See the 'Example Request' section above on how to make a request to the server.

### Without Docker
You'll need to have a PostgreSQL instance running, and you'll need to have Node.js v10.15.0 or greater installed.

To install the project's dependencies, run npm install:
```
npm install
```

To provision the database, run the `init.sql` script on your PostgreSQL server. This will create two databases called `verbs` and `verbs_test`.

Then you'll need to setup the database schema and seed the database by running `npm run migrate:dev` and then `npm run seed:dev`.

Finally, to start the web server you'll need to do two things. You'll need to set the `DB_CONNECTION_STRING` environment variable in your shell. The app uses this environment variable to connect to your PostgreSQL database.

Once `DB_CONNECTION_STRING` is set, you can run this command to start the server on port 3000:
```
npm run start:dev
```

### Running the Tests
If you're using docker, you can shell into the web container and run:
```
npm run test:e2e
```

If you're not using docker, before running the test command you'll need to set the `DB_CONNECTION_STRING` environment varible to connect to your `verbs_test` database.
