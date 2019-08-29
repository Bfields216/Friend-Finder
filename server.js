// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
//allows the port to be sent by Heroku
var PORT = process.env.PORT || 5000;


// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Starts the server to begin listening
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
  });