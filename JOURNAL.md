# STIMATE: DEVELOPMENT JOURNAL

## Purpose of this

I am creating this journal to have a track of my progress with this project.
Here I will write my thoughts, reminders and milestones.

## PROGRESS

### 20-09-2024

I thought I had this journal created but I was mistaken, so i decided to create it. Also I have splitted the project in two parts: **stimate-client** and **stimate-server**.

I was reading about Websockets, how to configure TS and discovered that tsx works better than ts-node. At least I could execute my server easily with tsx.

### 21-09-2024

Today I have no much time to code but I have solved some problems.
Connections were not created when clicked on Create Session, but now they are. Also solved the problem that sessions where automatically created when component renders for the first time.

### 26-09-2024

I have created rooms that will be created with the socket connections. I have decided to use nanoid to create those room IDs.
My next objective is to figure out how to improve the WebSocket Client. Also I should start thinking in some unit testing...
WebSocket server was refactored too btw.

### 01-10-2024

I have refactored a little bit the client side and also make the client socket work for react. I just need to improve it a little bit more but I got focused on refactoring. Which it is my next objective: Refactor Login.tsx and then start improving the client websocket.
I need to start thinking about how to create a stable socket system because connections are not created automatically, they are created when the users decides to start a new session.
