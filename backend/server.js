const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV||'development']);
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(morgan('short'));
app.use(cors());

app.get('/', function(req, res) {

  res.status(200).send(`The API is up and running`)

});


app.listen(port,()=> console.log(`Serving listing on port ${port}`));