// Global Variables
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3306;

// ROUTES
//goes here

app.listen(PORT, function() {
	console.log("Restaurant App listening on PORT: " + PORT);
});
