const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt')
require('dotenv').config();

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const port = parseInt(process.env.POR) || 5000;

const app = express();

const saltRounds = parseInt(process.env.SALT);

app.use(express.json());
app.use(morgan('short'));
app.use(cors());


//handle user login
app.post('/login', function (req, res) {
  let user = req.body;
  knex.select('*').from('users')
    .then(users_table => {
      for (let users of users_table) {
        let db_email = users.email;
        let db_password = users.password;
        let userExists = false
        if (db_email === user.email) {
          userExists = true;
          bcrypt.compare(user.password, db_password, (error, result) => {
            if (result) {
              res.status(200).send('Logged in successfully')
            }
            else {
              res.status(401).send('Invalid email or password')
            }
          })
        }
        if(!userExists){
          res.status(401).send('No user account found')
        }
      }
    })
})

//handle user signup
app.post('/signup', function (req, res) {
  let user = req.body;
  let validPass = true

  if (user.password !== user.retypedPassword) {
    res.status(401).send("Passwords do not match")
    validPass = false
  }

  if (validPass) {
    knex.select('*').from('users')
      .then(users_table => {
        for (let users of users_table) {
          if (user.username === users.username) {
            res.status(401).send('This username is already taken')
            throw new Error('username taken')
          }
          else if (user.email === users.email) {
            res.status(401).send('Account with this email already exists')
            throw new Error('email taken')
          }
        }
        return users_table
      })
      .then(response => {
        bcrypt.hash(user.password, saltRounds, (error, hash) => {

          let insertBody = {
            ...user,
            password: hash
          }
          delete (insertBody.retypedPassword)

          console.log('insert:', insertBody)

          knex.insert(insertBody)
            .into("users")
            .then(data => res.status(200).send("Made user account"))
            .catch(err => res.status(404).send(err))
        })
      })
      .catch(err => console.log(err))
  }
})


app.listen(port, () => console.log(`Serving listing on port ${port}`));