const config = require("config");
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const timeSlotsRoute = require('./routes/timeSlots');
const usersRoute = require('./routes/users');

const API_PORT = 3001;
const app = express();
app.use(cors());

if (!config.get("myprivatekey")) {
    console.error("FATAL ERROR: myprivatekey is not defined.");
    process.exit(1);
  }

// connects our back end code with the database
mongoose.connect("mongodb://localhost:27017/cuCsCareer", { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

// Routes
app.use('/api/timeSlots', timeSlotsRoute);
app.use('/api/users', usersRoute);
// app.get('/app', app.getTimeSlots); 
// app.get('/app', app.getEducatorTimeSlots);
// app.post('/app', app, writeMeetingDescription);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));