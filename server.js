const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const config = require('./_config');

// Define routes
const index = require('./routes/index');
const image = require('./routes/image');

// Initializing the app
const app = express();

// Connecting to the database
const MONGODB_URI = process.env.MONGODB_URI || config.mongoURI[app.settings.env];
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Connected to Database: ${MONGODB_URI}`);
  })
  .catch((err) => {
    console.error(err);
  });

// View Engine
app.set('view engine', 'ejs');

// Set up the public folder
app.use(express.static(path.join(__dirname, 'public'));

// Body parser middleware
app.use(express.json());

app.use('/', index);
app.use('/image', image);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = app;
