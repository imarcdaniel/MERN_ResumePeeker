const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config()
require('./config/database.js')
const fileUpload = require("express-fileupload");

const app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(fileUpload());
app.use('/api/users', require('./routes/api/users'));
// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route
app.use(require('./config/auth'));
app.use('/api/resumes', require('./routes/api/resumes.js'));
app.use('/api/comments', require('./routes/api/comments.js'));
app.use("/api/images", require("./routes/api/imagesRoutes.js"));


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});


