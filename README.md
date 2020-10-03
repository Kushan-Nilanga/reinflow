# Reinflow - Smart Traffic Control Platform
Reinflow is a Nodejs and Python based traffic control platform which provides high-level features such as
- View traffic in real-time
- Control traffic lights by python based traffic control algorithms
- Visualise status of traffic lights
- Route users to avoid stop lights
- Change traffic lights to prioritise emergency vehicles

## Tech Stack of the project

Technology stack contains a number of technologies including 
- NodeJS - Developement of web servers
- React - Developement of use interface
- Redux - Management of states in react
- DJango - Containing the python based algorithms to control the system
- SocketIo - Connection between traffic lights, sensors and the system
- MongoDB - Data storage

![alt test](external/Stack.png 'Tech Stack')
## Backend
Backend project contains the main endpoints for tasks such as user login, registration, management, database management and hardware control. Backend project is built using Nodejs, ExpressJs, Axios, JWT authentication and HapiJs for validation.

Backend endpoints are secured using JWT authentication on each endpoint to avoid potential security vulnerabilities. These JWT tokens are authenticated everytime a client request is made on backend.

To ensure the security from the client side the endpoints are divided into 3 main admin level 
- Level 1 -> Top level administraion such as add, remove, promote and demote other users
- Level 2 -> Light control and statistics visualisation
- Level 3 -> Visualise traffic and traffic light data

## Frontend 
Frontend project contains the UI elements to visualise traffic statuses and management. All the different user levels have custom user interface for security reasons. Users can visualise and schedule routes using the features of the frontend application. User information can be changed using the user dashboard.

## Socket Server
We use socket server to communicate with low level hardware(We use simulated values here for the developement purposes). Socket maintains constant connection between socket clients(hardware) and socket server(SocketIo). When the backend requests data from the socket server the data is being sent.

## Algorithm Interface
Algorithm interface is a DJango project which contains the logic for traffic control and routing. This project can be extend to contain multiple control algorithms. Currently this project contains the logic to control traffic lights and routing for emergency vehicles