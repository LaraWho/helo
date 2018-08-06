const express = require('express');
const bodyParser = require('body-parser');
const cntrl = require('./controller');
const massive = require('massive');
require('dotenv').config();

const { 
    SERVER_PORT,
    SESSION_SECRET
} = process.env; 

app.use(bodyParser.json());

const app = express();

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

app.put('/api/auth/register', cntrl.add_user);

app.listen(SERVER_PORT, ( ) => {
    console.log(`Listening on port: ${SERVER_PORT}`)
});