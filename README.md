# Edumate

This is Team 13's project for CSCI-P565/P-465.

## env var :p
The environment variable is generated with our `npm run get-db-url` and is accessed in the code with dotenv.

## Running locally
### For just frontend -- port 3000

```
1. rm package-lock.json (if applicable)
2. npm install
2.5 cd api && npm install && cd .. 
3. npm build -- to check if everything is in order
4. npm start
```
### Backend + Frontend -- port 9000
```
> pwd
whatever/P565-SE1-SP23-Project-Team-13/
> npm run api-start
```

## Databases

```
# connecting to db from terminal
> heroku pg:psql
# updating the tables
> heroku pg:psql --app edumate < filename.sql
```

## Deployment to Heroku

### Prod

```
> cd /project
> heroku git:remote -a edumate
> git add .
> git commit -am "msg"
> git push heroku master
```
