const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Database
const db = require('./app/config/database');

// Test DB
db.authenticate()
  .then(()=> console.log('DB connected...'))
  .catch(err => console.log('Error:' + err) )

//db.sync({force: true})
// Forcer la synchronisation du server et refresh les tables.

// app init
const app = express();

// paths
const publicDirectory = path.join(__dirname, 'app/public');
const viewsPath = path.join(__dirname, 'app/views');
app.set('views', viewsPath);


// Set static folder
app.use(express.static(publicDirectory));
app.use(express.static("img"));

// Body Parser to use json
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Index route
app.get("/", (req, res) => {
  res.render('index',{layout: 'landing'})
});

// All routes
app.use('/accords',require('./app/routes/accords'));
app.use('/athlètes', require('./app/routes/athlètes'));
app.use('/contreparties', require('./app/routes/contreparties'));
app.use('/sponsors', require('./app/routes/sponsors'));



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
