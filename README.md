## Node Js RESTFULL API with postgres on docker

### make sure you have the env file with PORT and DATABASE\_URL (postgres url)

#### .env :

*   **DATABASE\_URL**\="postgresql://dbuser:todos2022@postgress-db:5432/todoapp?schema=public"
*   **PORT**\=8080

#### how to run the app :

1.  run your docker first
2.  clone the repo
3.  create the env file with required **DATABASE\_URL** and **PORT** (optional)
4.  type “docker-compose up -d” for start the app
5.  type “docker-compose down” for stop the app

### if you got _**error**_ (The table \`public.Todos\` does not exist in the current database.) on the console api.

#### do this : 

*   go to express-todos-api-postgress CLI (or run docker exec -it container\_id /bin/sh)
*   type “npx prisma migrate dev --name init” 
*   restart the container