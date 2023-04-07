# ShelfWise

SDI #15 Crud App 

Created by Mackenzie Nickle


## Thank you instructors! 
I can't believe what I've been able to learn in the last few months :)

## Setup and Installation

## Running the App using Docker Compose:
1. Clone this repository to your local machine.

2. Make sure Docker is running on your desktop.

3. Open a terminal in the root folder of the application.

```bash
# sets up docker images and containers for the app
docker-compose up

```
3. Open up localhost:3000 in your preferred browser.

## Running the App without Docker Compose:
1. Clone this repository to your local machine.

2. Open a terminal in the root folder of the application.

```bash
# pulls latest docker image
docker pull postgres

# sets up docker container in detached state
docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \ -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

```
3. Open another terminal in the root folder of the application.

```bash
# navigate to backend directory
cd backend

# start server
npm start

```

4. Open another terminal in the root folder of the application.

```bash
# navigate to frontend directory
cd frontend

# start frontend
npm start

```

5. Open up localhost:3000 in your preferred browser
