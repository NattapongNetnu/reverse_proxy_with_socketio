const express = require('express')
const cors = require('cors')
const app = express()

const corsOptions = {
    origin: '*',
    credentials: true,

}

app.use(cors(corsOptions));

const port = 3000

app.all('/*', (req,res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

// app.get('/noom', (req,res) => res.send("hello"))

// app.get('/', (req,res) => res.send("hello world"))

const server = require('http').createServer(app)
const io = require('socket.io')(server, { path: '/noom'})

io.on('connection', (err) => {
    console.log('user connected')
    io.emit('message', 'Hello User')
})

server.listen(port,() => {
    console.log(`app running at port ${port}`)
})