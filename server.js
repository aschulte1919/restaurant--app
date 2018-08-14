// Global Variables
// =============================================================
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3306;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
// =============================================================
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
	console.log("Restaurant App listening on PORT: " + PORT);
});
