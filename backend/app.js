const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const fs = require('fs');

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

app.use('/exported-images', express.static('static'));

app.post("/api/postuser", (req, res, next) => {
  if( !req.body.name || !req.body.email || !req.body.username || !req.body.password ){
    response = {
      error: true,
      code: 400,
      message: 'Missing data'
    };
    res.send(response);
  }else{
    let emailQuery = "SELECT * FROM test_users WHERE e_mail = ?";
    let usernameQuery = "SELECT * FROM test_users WHERE username = ?";
    db.query(emailQuery,[
      req.body.email
    ], (err, result) => {
      if(result.length>0){
        response = {
          error: true,
          code: 409,
          message: 'E-mail already in use'
        };
        res.send(response);
      }else{
        db.query(usernameQuery,[
          req.body.username
        ], (err, result) => {
          if(result.length>0){
            response = {
              error: true,
              code: 409,
              message: 'Username already in use'
            };
            res.send(response);
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
            res.send(response);
            let insQuery = "INSERT INTO test_users (username,password,e_mail,name,image) VALUES ('" + user.username + "','" + user.password + "','" + user.email + "','" + user.name + "', null)";
            db.query(insQuery, (err, result) => {
              if (err) {
                response = {
                  error: true,
                  code: 500,
                  message: err
                };
                res.send(response);
              }
            });
          }
        });
      }
    });
  }
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

app.get("/api/usersquery", (req,res,next) => {
  let usersQuery = "SELECT user_id, username FROM test_users";
  db.query(usersQuery, (err,result) => {
    res.send(result);
  });
});

app.post("/api/postproject", (req,res,next) => {
  let nameQuery = "SELECT name FROM project WHERE name = ?";
  db.query(nameQuery,[
    req.body.name
  ],(err,result) => {
    if(result.length>0){
      response = {
        error: true,
        code: 409,
        message: 'Name already in use'
      };
    res.send(response);
    } else {
      let projectQuery = "INSERT INTO project (name,description,start_date,end_date,image) VALUES(?,?,?,?,?)";
      db.query(projectQuery,[
        req.body.name,
        req.body.description,
        req.body.start_date,
        req.body.end_date,
        req.body.image
      ],(err,result) => {
        if(err){
          response = {
            error: true,
            code: 500,
            message: err
          };
          res.send(response);
        } else {
          response = {
            error: false,
            code: 200,
            message: 'Project created succesfully'
          };
          res.send(response);
        }
      });
    }
  });
});

app.post("/api/lastproject", (req,res,next) => {
  let lastquery = "SELECT project_id FROM project WHERE name = ?"
  db.query(lastquery,[
    req.body.name
  ],(err,result) => {
    if(err){
      console.log(err);
      response = {
        error: true,
        code: 500,
        message: err
      };
      res.send(response);
    } else {
      if (result === '') {
        response = {
          error: true,
          code: 404,
          message: 'Project not found'
        };
        res.send(response);
      } else {
        res.send(result);
      }
    }
  });
});

app.post("/api/postmember", (req, res, next) => {
  let memberquery = "INSERT INTO member VALUES(?,?,?)"
  db.query(memberquery,[
    req.body.projectname,
    req.body.user,
    req.body.role
  ],(err,result) => {
    if(err){
      response = {
        error: true,
        code: 500,
        message: err
      };
      res.send(response);
    } else {
      response = {
        error: false,
        code: 200,
        message: 'Members added succesfully.'
      };
      res.send(response);
    }
  });
});

module.exports = app;
