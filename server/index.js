const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http').Server(app);
const PORT = 4000;
const socketIO = require('socket.io')(http, {
    cors: {
        origin:'http://localhost:3000'
    }
});
socketIO.on('connection', (socket) => {
    console.log('User is connected');
    socket.on('disconnect', ()=> {
        console.log('User is disconnected');
    })
});

app.use(cors());
app.get('/', (req, res) => {
    res.json({
        message:'Hello, World!'
    })
});

http.listen(PORT, ()=> {
    console.log(`Server is listening on port: ${PORT}`);
})