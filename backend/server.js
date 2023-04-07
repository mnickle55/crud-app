const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const cookieSession = require('cookie-session')
const bcrypt = require('bcrypt')
require('dotenv').config();

const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const port = parseInt(process.env.PORT) || 5000;

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
      if(users_table.map(user=>user.email).includes(user.email)===false){
        res.status(400).send('No user account found')
      }

      for (let users of users_table) {
        let db_email = users.email;
        let db_password = users.password;
        let userExists = false
        if (db_email === user.email) {
          userExists = true;
          bcrypt.compare(user.password, db_password, (error, result) => {
            if (result) {
              let send = (({id,username,first_name,last_name})=>({id,username,first_name,last_name}))(users)
              res.status(200).json(send)
            }
            else {
              res.status(401).send('Invalid password')
            }
          })
        }
      }
    })
})


//handle user signup
app.post('/signup', function (req, res) {
  let user = req.body;
  let validPass = true

  if (user.password !== user.retypedPassword) {
    res.status(400).send('Passwords do not match')
    validPass = false
  }

  if (validPass) {
    knex.select('*').from('users')
      .then(users_table => {
        for (let users of users_table) {
          if (user.username === users.username) {
            res.status(400).send('This username is already taken')
            throw new Error('username taken')
          }
          else if (user.email === users.email) {
            res.status(400).send('Account with this email already exists')
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

app.post('/items', function(req,res){
  let newItem = req.body
  knex('items')
    .insert(newItem)
    .then(data=>res.status(200).json(newItem))
})

app.patch('/items', function(req,res){
  let updatedItem = req.body
  knex('items')
    .where('id','=',updatedItem.id)
    .update({
      name: updatedItem.name,
      quantity: updatedItem.quantity,
      description: updatedItem.description
    })
    .then(data=>res.status(200).json(updatedItem))
})

app.get('/items', function(req,res) {
  knex('items')
  .join('users', 'items.user_id', 'users.id')
  .select('items.id',
  'users.id as user_id',
  'users.first_name',
  'users.last_name',
  'items.name',
  'items.description',
  'items.created_at',
  'items.updated_at',
  'items.quantity')
    .then(data => 
      res.status(200).json(data))
    .catch(err =>
      res.status(404).json({
        message:
          'The data you are looking for could not be found. Please try again'
      })
    );
})

app.delete('/items/:id', function(req, res){
  let itemID = req.params.id;

  knex("items").where("id", itemID)
    .del()
    .then(data => res.status(200).json({message:"Deleted item"}))
    .catch(err => res.status(404).json(err))
})


app.listen(port, () => console.log(`Serving listing on port ${port}`));