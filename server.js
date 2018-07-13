const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Set Routes
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/post');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB Database
mongoose
  .connect(
    db,
    { useNewUrlParser: true },
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//Test Express
app.get('/', (req, res) => res.send('Hello World'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Set Server PORT to Heroko and localhost:port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
