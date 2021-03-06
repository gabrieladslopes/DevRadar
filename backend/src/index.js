const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-yrktd.mongodb.net/test?retryWrites=true&w=majority', 
    { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
    });

app.use(express.json());
app.use(cors())
app.use(routes);

server.listen(3333); 