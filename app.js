require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
const variable = require("./routes/variable");
const user = require("./routes/user");
const retrieve_employees = require("./routes/retrieve_employees");
const upload_employees = require("./routes/upload_employees");
const path = require("path");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
app.use(express.static("public"));

//Initializing routes
app.use('/api/var', variable);  //Route for all internal variables related functions (Uploading, updating, etc.)
app.use('/api/user', user);     //Route for all user related functions (Login, register, etc.)
app.use('/api/retrieve_employees', retrieve_employees);  //Route for all decision retrieval related functions (Fetching, searching, etc.)
app.use('/api/upload_employees', upload_employees);  //Route for all decision retrieval related functions (Fetching, searching, etc.)

//For testing the root when deployed to cloud
app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

//Uncomment the line below this if testing on local machine
app.listen(process.env.PORT || 3000, () => console.log("Listening on: " + (process.env.PORT || 3000)));

//Uncomment the line below and comment the line above if deploying to cloud
//module.exports = app;
