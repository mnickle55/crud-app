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

```bash
The database will be seeded with two initial user accounts.
To login and see the experience from an inventory manager point of view, use one of the following sets of login credentials:

User 1:
Email: blee@gmail.com
Password: password

User 2: 
Email: evater@gmail.com
Password: password

Otherwise, you can login as a guest user or create an account by clicking on the signup button!

```

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

```bash
The database will be seeded with two initial user accounts.
To login and see the experience from an inventory manager point of view, use one of the following sets of login credentials:

User 1:
Email: blee@gmail.com
Password: password

User 2: 
Email: evater@gmail.com
Password: password

Otherwise, you can login as a guest user or create an account by clicking on the signup button!

```