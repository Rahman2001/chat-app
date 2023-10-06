# chat-app
### Description: This project is created to gain practical experience in React.js framework. The aim of the project is to use all fundamental features of React such as:
<ol>
  <li>React state/props</li>
  <li>React Hooks (useState, useContext, useCookies, etc.)</li>
  <li>React Routers</li>
  <li>React Request (axios)</li>
  <li>Component lifecycles</li>
</ol>

### Tech Stack: HTML5, CSS3, Javascript, HarperDB, Socket.io
### Status: Ongoing

## Project Overview: 
App allows users to chat with each other as any other messenger applications. The application consists of two modules which are: 
<ul>
  <li>client</li>
  <li>server</li>
</ul>

## Client
This module consists of UI components that is utilized by React. When app is run, a user will see Sign in/up pages as below:

![registration page](https://github.com/Rahman2001/chat-app/blob/master/imagesForReadme/2023-10-06%20(1).png)
![login page](https://github.com/Rahman2001/chat-app/blob/master/imagesForReadme/2023-10-06.png)

If user is not new, then the application tries to get user credentials from cookies. After successful authentication, user will see chat page where he/she can interact with others:

![chat page 1](https://github.com/Rahman2001/chat-app/blob/master/imagesForReadme/2023-10-06%20(2).png)
![chat page 2](https://github.com/Rahman2001/chat-app/blob/master/imagesForReadme/2023-10-06%20(3).png)
![chat page 3](https://github.com/Rahman2001/chat-app/blob/master/imagesForReadme/2023-10-06%20(4).png)


## Server
This module is created mainly for real-time connection between client and server through <b>Socket.io</b>. 
Socket.io enables us to establish real-time connection and listen to events that are required for notifying a client (such as sending/recieving messages).

#### <i>Note: Server module is not implemented yet and many features of UI needs further improvements.</i>
