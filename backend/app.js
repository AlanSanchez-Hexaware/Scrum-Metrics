const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'lenny',
  password: 'toor',
  database: 'userstest',
  insecureAuth: true
});

db.connect((err) => {
  if(err){
    throw err;
  }
  console.log('Connected to database.');
});
global.db = db;

let user = {
  id: '',
  name: '',
  email: '',
  username: '',
  password: ''
}

let response = {
  error: false,
  code: 200,
  message: ''
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

app.post("/api/postuser", (req, res, next) => {
  if( !req.body.name || !req.body.email || !req.body.username || !req.body.password ){
    response = {
      error: true,
      code: 400,
      message: 'Missing data'
    };
  }else{
    let emailQuery = "SELECT * FROM test_users WHERE e_mail = '" + req.body.email + "'";
    let usernameQuery = "SELECT * FROM test_users WHERE username = '" + req.body.username + "'";
    db.query(emailQuery, (err, result) => {
      if(result.length>0){
        response = {
          error: true,
          code: 409,
          message: 'E-mail already in use'
        };
      }else{
        db.query(usernameQuery, (err, result) => {
          if(result.length>0){
            response = {
              error: true,
              code: 409,
              message: 'Username already in use'
            };
          }else{
            user = {
              name: req.body.name,
              email: req.body.email,
              username: req.body.username,
              password: req.body.password
            };
            response = {
              error: false,
              code: 201,
              message: 'User created'
            };
            let insQuery = "INSERT INTO test_users (username,password,e_mail,name,image) VALUES ('" + user.username + "','" + user.password + "','" + user.email + "','" + user.name + "', null)";
            db.query(insQuery, (err, result) => {
              if (err) {
                response = {
                  error: true,
                  code: 500,
                  message: err
                };
              }
            });
          }
        });
      }
    });
  }
  res.send(response);
});

app.get("/api", (req, res, next) => {
  res.send(response);
});

app.post("/api/login", (req, res, next) => {
  if( !req.body.username || !req.body.password ){
    response = {
      error: true,
      code: 400,
      message: 'Missing data'
    };
    res.send(response);
  }else{
    let userQuery = "SELECT username FROM test_users WHERE username = ?";
    db.query(userQuery,[
      req.body.username
    ],(err, result) => {
      if (err) {
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.send(response);
      } else {
        if (result.length===0) {
          response = {
            error: true,
            code: 404,
            message: 'User not found'
          };
          res.send(response);
        } else {
          let logQuery = "SELECT username, password FROM test_users WHERE username = ? AND password = ?";
          db.query(logQuery,[
            req.body.username,
            req.body.password
          ],(err, result) => {
            if (err) {
              response = {
                error: true,
                code: 500,
                message: err
              };
              res.send(response);
            } else {
              if(result.length > 0){
                response = {
                  error: false,
                  code: 200,
                  message: 'Successful login'
                };
                res.send(response);
              } else {
                  response = {
                    error: true,
                    code: 400,
                    message: 'Incorrect password'
                  };
                  res.send(response);
                }
              }
            });
        }
      }
    });
  }
});

module.exports = app;
