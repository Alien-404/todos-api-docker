const express = require('express');
const cors = require('cors');
require('dotenv').config();

// init express
const app = express();

// miscellaneous
const BASE_URL = `http://localhost:${process.env.PORT || 8080}`;

// variable
const todosRoutes = require('./routes/todos');

// middleware
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// root route
app.use('/todos', todosRoutes);

// listen app
app.listen(
  process.env.PORT || 8080,
  process.env.HOSTNAME || 'localhost',
  (req, res) => {
    console.log(`Server running ${BASE_URL}`);
  }
);
