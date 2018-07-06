const express = require('express');
const bodyParser = require('body-parser');
const cntrl = require('./controller');
const massive = require('massive');
require('dotenv').config();

const { 
    SERVER_PORT,
    CONNECTION_STRING 
} = process.env; 

// app.use(bodyParser.json());

const app = express();

app.listen(SERVER_PORT, ( ) => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});