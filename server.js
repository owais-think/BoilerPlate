const express = require('express');
const app = express();
const path = require('path');
const UserApiroute=require('./routes/UserApi')
const cors = require('cors')
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
        path: '/custom',
    reconnection: true,
    reconnectionAttempts: 3,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.5,
    timeout: 20000,
    autoConnect: true,
    query: {},
    // options of the Engine.IO client
    upgrade: true,
    forceJSONP: false,
    jsonp: true,
    forceBase64: false,
    enablesXDR: false,
    timestampRequests: true,
    timestampParam: 't',
    policyPort: 843,
    transports: ['polling', 'websocket'],
    transportOptions: {},
    rememberUpgrade: false,
    onlyBinaryUpgrades: false,
    requestTimeout: 0,
    protocols: [],
    // options for Node.js
    agent: false,
    pfx: null,
    key: null,
    passphrase: null,
    cert: null,
    ca: null,
    ciphers: [],
    rejectUnauthorized: false,
    perMessageDeflate: true,
    forceNode: false,
    localAddress: null,
});
const port = process.env.PORT || 3000;

app.use(cors())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/user',UserApiroute)
app.get('/',(req,res)=>{
  res.send("<h1>hello</h1>")
})

let numUsers = 0;
    io.engine.on("connection_error", (err) => {
    console.log(err);
    });

    io.on('connection', (socket) => {
    io.emit('connecteddd',{
        message:"yahoooo"
      })
    });

    server.listen(port, () => {
        console.log('Server listening at port %d', port);
      });