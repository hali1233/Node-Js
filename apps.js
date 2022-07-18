const http = require('http');
const fs = require('fs');
const express = require('express');
const route = require('./route');

const app = express();
//const server = http.createServer(route);

app.use((req, res, next) => {
    console.log('in middleware 1');
    next();
});

app.use((req, res, next) => {
    console.log('in middleware 2');
    next();
});
app.listen(5500);