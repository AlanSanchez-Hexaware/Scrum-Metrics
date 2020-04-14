const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const path = require('path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'db4free.net',
  user: 'lennyesquivel',
  password: 'toortoor',
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
app.use(express.static(__dirname + '/dist/scrum-metrics/'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// app.use('/exported-images', express.static('static'));

app.post("/api/postuser", (req, res, next) => {
  if( !req.body.name.trim() || !req.body.email || !req.body.username || !req.body.password ){
    response = {
      error: true,
      code: 400,
      message: 'Missing data'
    };
    res.status(400).send(response);
  }else{
    let emailQuery = "SELECT * FROM test_users WHERE e_mail = ?";
    let usernameQuery = "SELECT * FROM test_users WHERE username = ?";
    db.query(emailQuery,[
      req.body.email
    ], (err, result) => {
      if(result.length>0){
        response = {
          error: true,
          code: 200,
          message: 'E-mail already in use'
        };
        res.status(200).send(response);
      }else{
        db.query(usernameQuery,[
          req.body.username
        ], (err, result) => {
          if(result.length>0){
            response = {
              error: true,
              code: 200,
              message: 'Username already in use'
            };
            res.status(200).send(response);
          }else{
            user = {
              name: req.body.name,
              email: req.body.email,
              username: req.body.username,
              password: req.body.password
            };
            let usermail = req.body.email;
            if(!usermail.includes("@") || !usermail.includes(".") || (!usermail.includes("@") && !usermail.includes("."))){
              response={
                error: true,
                code: 200,
                message: 'Invalid mail format'
              };
              res.status(200).send(response);
            } else {
              let insQuery = "INSERT INTO test_users (username,password,e_mail,name,image) VALUES (?,?,?,?, null)";
              db.query(insQuery,[
                user.username,
                user.password,
                user.email,
                user.name
              ], (err, result) => {
                if (err) {
                  response = {
                    error: true,
                    code: 500,
                    message: err
                  };
                  res.status(500).send(response);
                } else {
                  response = {
                    error: false,
                    code: 201,
                    message: 'User created'
                  };
                  res.status(201).send(response);
                }
              });
            }
          }
        });
      }
    });
  }
});

app.get("/api", (req, res, next) => {
  res.status(200).send(response);
});

app.post("/api/login", (req, res, next) => {
  if( !req.body.username || !req.body.password ){
    response = {
      error: true,
      code: 400,
      message: 'Missing data'
    };
    res.status(400).send(response);
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
        res.status(500).send(response);
      } else {
        if (result.length===0) {
          response = {
            error: true,
            code: 200,
            message: 'User not found'
          };
          res.status(200).send(response);
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
              res.status(500).send(response);
            } else {
              if(result.length > 0){
                let payload = { subject: req.body.username };
                let token = jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 60), payload}, 'dayman');
                response = {
                  error: false,
                  code: 201,
                  message: token
                };
                res.status(201).send(response);
              } else {
                  response = {
                    error: true,
                    code: 200,
                    message: 'Incorrect password'
                  };
                  res.status(200).send(response);
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
    if(err){
      response = {
        error: true,
        code: 500,
        message: err
      };
      res.status(500).send(response);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/api/user", (req,res,next) => {
  let userQuery = "SELECT name, e_mail, user_id, image FROM test_users WHERE username = ?";
  if(!req.body.username){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(userQuery,[
      req.body.username
    ],(err,result) => {
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      }
      if(result.length>0){
        response = {
          error: false,
          code: 200,
          message: result
        };
        res.status(200).send(result);
      } else {
        response = {
          error: true,
          code: 201,
          message: 'User not found'
        };
        res.status(201).send(response);
      }
    });
  }
});

app.post("/api/getprofileimage", (req,res,next) => {
  let userImg = "SELECT image FROM test_users WHERE username = ?";
  if(!req.body.username){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(userImg,[
      req.body.username
    ],(err,result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      }else{
        res.status(200).send(result);
      }
    });
  }
});

app.put('/api/nameupd', (req,res,next) => {
  let updnameQ = "UPDATE test_users SET name = ? WHERE username = ?";
  if(!req.body.username || !req.body.name.trim()){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(updnameQ,[
      req.body.name,
      req.body.username
    ],(err,result) => {
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'User updated'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.put('/api/mailupd', (req,res,next) => {
  let updmailQ = "UPDATE test_users SET e_mail = ? WHERE username = ?";
  let checkMail = "SELECT * FROM test_users WHERE e_mail = ?"
  if(!req.body.email || !req.body.username){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(checkMail,[
      req.body.email
    ],(err, result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(err);
      }else{
        if(result.length>0){
          response = {
            error: true,
            code: 200,
            message: 'Email already in use'
          };
          res.status(200).send(response);
        } else {
          let usermail = req.body.email;
          if(!usermail.includes("@") || !usermail.includes(".") || (!usermail.includes("@") && !usermail.includes("."))){
            response={
              error: true,
              code: 200,
              message: 'Invalid mail format'
            };
            res.status(200).send(response);
          } else {
            db.query(updmailQ,[
              req.body.email,
              req.body.username
            ],(err,result) => {
              if(err){
                response = {
                  error: true,
                  code: 500,
                  message: err
                };
                res.status(500).send(response);
              } else {
                response = {
                  error: false,
                  code: 201,
                  message: 'User updated'
                };
                res.status(201).send(response);
              }
            });
          }
        }
      }
    });
  }
});

app.put('/api/passupd', (req,res,next) => {
  let updPass = "UPDATE test_users SET password = ? WHERE username = ?";
  if(!req.body.newpass || !req.body.username){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(updPass,[
      req.body.newpass,
      req.body.username
    ],(err,result) => {
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      }else{
        response = {
          error: false,
          code: 200,
          message: 'Password updated'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.put('/api/picupd', (req,res,next) => {
  let updPicture = "UPDATE test_users SET image = ? WHERE username = ?";
  if(!req.body.newimage || !req.body.username){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(updPicture,[
      req.body.newimage,
      req.body.username
    ],(err,result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response={
          error: false,
          code: 200,
          message: 'Image updated. Reload.'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.put('/api/allupd', (req,res,next) => {
  let updallQ = "UPDATE test_users SET name = ? , e_mail = ? WHERE username = ?";
  if(!req.body.name.trim() || !req.body.email || !req.body.username){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    let usermail = req.body.email;
    if(!usermail.includes("@") || !usermail.includes(".") || (!usermail.includes("@") && !usermail.includes("."))){
      response={
        error: true,
        code: 201,
        message: 'Invalid mail format'
      };
      res.status(201).send(response);
    } else {
      db.query(updallQ,[
        req.body.name,
        req.body.email,
        req.body.username
      ],(err,result) => {
        if(err) {
          response = {
            error: true,
            code: 500,
            message: err
          };
          res.status(500).send(response);
        } else {
          response = {
            error: false,
            code: 200,
            message: 'User updated'
          };
          res.status(200).send(response);
        }
      });
    }
  }
});

app.post("/api/deluser", (req,res,next) => {
  let checkQuery = "SELECT * FROM test_users WHERE user_id = ? AND password = ?";
  let delQuery = "DELETE FROM test_users WHERE user_id = ?";
  let delMemQuery = "DELETE FROM member WHERE user_id = ?"
  if(!req.body.userid || !req.body.password){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(checkQuery,[
      req.body.userid,
      req.body.password
    ],(err,result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        if(result.length===0){
          response={
            error: true,
            code: 200,
            message: 'Incorrect password, try again.'
          };
          res.status(200).send(response);
        } else {
          db.query(delMemQuery,[
            req.body.userid
          ],(err,result)=>{
            if(err){
              response={
                error: true,
                code: 500,
                message: err
              };
              res.status(500).send(response);
            } else {
              db.query(delQuery,[
                req.body.userid,
                req.body.password
              ],(err,result)=>{
                if(err){
                  response={
                    error: true,
                    code: 500,
                    message: err
                  };
                  res.status(500).send(response);
                } else {
                  response={
                    error: false,
                    code: 201,
                    message: 'Deleted succesfully'
                  };
                  res.status(201).send(response);
                }
              });
            }
          });
        }
      }
    });
  }
});

app.post("/api/postproject", (req,res,next) => {
  let nameQuery = "SELECT name FROM project WHERE name = ?";
  if(!req.body.name.trim() || !req.body.description.trim() || !req.body.start_date){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(nameQuery,[
      req.body.name
    ],(err,result) => {
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      }
      if(result.length>0){
        response = {
          error: true,
          code: 200,
          message: 'Name already in use'
        };
      res.status(200).send(response);
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
            res.status(500).send(response);
          } else {
            let projidQuery = "SELECT project_id FROM project WHERE name = ?";
            db.query(projidQuery,[
              req.body.name
            ],(err,result)=>{
              if(err){
                response={
                  error: true,
                  code: 500,
                  message: err
                };
                res.status(500).send(response);
              } else {
                res.status(201).send(result);
              }
            });
          }
        });
      }
    });
  }
});

app.post("/api/lastproject", (req,res,next) => {
  let lastquery = "SELECT project_id FROM project WHERE name = ?"
  if(!req.body.name){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  }else{
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
        res.status(500).send(response);
      } else {
        if (result === '') {
          response = {
            error: true,
            code: 201,
            message: 'Project not found'
          };
          res.status(201).send(response);
        } else {
          res.status(200).send(result);
        }
      }
    });
  }
});

app.post("/api/userprojs", (req,res,next) => {
  let projsQuery = "SELECT project_id FROM member WHERE user_id = ?";
  if(!req.body.userid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  }
  db.query(projsQuery,[
    req.body.userid
  ],(err,result) => {
    if(err){
      response = {
        error: true,
        code: 500,
        message: err
      };
      res.status(500).send(response);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/api/projectinfo", (req,res,next) => {
  let projInfo = "SELECT name, description, start_date, end_date FROM project WHERE project_id = ?";
  if(!req.body.projectid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  }
  db.query(projInfo,[
    req.body.projectid
  ],(err,result) => {
    if(err){
      response = {
        error: true,
        code: 500,
        message: err
      };
      res.status(500).send(response);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post("/api/getprojectimage", (req,res,next) => {
  let projImg = "SELECT image FROM project WHERE project_id = ?";
  if(!req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(projImg,[
      req.body.projid
    ],(err,result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      }else{
        res.status(200).send(result);
      }
    });
  }
});

app.put('/api/setnewprojimg', (req,res,next) => {
  let updPicture = "UPDATE project SET image = ? WHERE project_id = ?";
  if(!req.body.newimage || !req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(updPicture,[
      req.body.newimage,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response={
          error: false,
          code: 200,
          message: 'Image updated.'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.post("/api/postmember", (req, res, next) => {
  let memberquery = "INSERT INTO member VALUES(?,?,?)";
  let checkMember = "SELECT * FROM member WHERE project_id = ? AND user_id = ?";
  if(!req.body.projid || !req.body.user || !req.body.role){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(checkMember,[
      req.body.projid,
      req.body.user
    ],(err,result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(result);
      } else {
        if(result.length > 0){
          response={
            error: true,
            code: 201,
            message: 'User already on that project'
          };
          res.status(201).send(response);
        } else {
          db.query(memberquery,[
            req.body.projid,
            req.body.user,
            req.body.role
          ],(err,result) => {
            if(err){
              response = {
                error: true,
                code: 500,
                message: err
              };
              res.status(500).send(response);
            } else {
              response = {
                error: false,
                code: 200,
                message: 'Member added succesfully.'
              };
              res.status(200).send(response);
            }
          });
        }
      }
    });
  }
});

app.post('/api/projmembers',(req,res,next) => {
  let membersQuery = 'SELECT * FROM member WHERE project_id = ?';
  if(!req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  }
  db.query(membersQuery,[
    req.body.projid
  ],(err,result) => {
    if(err){
      response = {
        error: true,
        code: 500,
        message: err
      }
      res.status(500).send(response);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/api/username',(req,res,next) => {
  let userNQuery = 'SELECT name FROM test_users WHERE user_id = ?';
  if(!req.body.userid){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(userNQuery,[
      req.body.userid
    ],(err,result) => {
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        }
        res.status(500).send(response);
      } else {
        res.status(200).send(result);
      }
    });
  }
});

app.put('/api/setnewdesc', (req,res,next)=>{
  let descQuery = 'UPDATE project SET description = ? WHERE project_id = ?';
  if(!req.body.description || !req.body.projid){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(descQuery,[
      req.body.description,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'Description updated succesfully'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.post('/api/deletemember', (req,res,next)=>{
  let delMemQ = 'DELETE FROM member WHERE user_id = ? AND project_id = ?';
  if(!req.body.userid || !req.body.projid){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(delMemQ,[
      req.body.userid,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'Member deleted'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.put('/api/updmemrole', (req,res,next) => {
  let memRoleQ = 'UPDATE member SET user_type = ? WHERE project_id = ? AND user_id = ?';
  if(!req.body.role.trim() || !req.body.projid || !req.body.userid){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(memRoleQ,[
      req.body.role,
      req.body.projid,
      req.body.userid
    ], (err,result) => {
      if (err) {
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'Role updated succesfully'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.post('/api/setsprint', (req,res,next)=>{
  let sprintName = 'SELECT * FROM sprint WHERE name = ? AND project_id = ?';
  let newSprintQuery = 'INSERT INTO sprint (name, project_id, done) VALUES (?,?,false)';
  if(!req.body.name || !req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(sprintName,[
      req.body.name,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        if(result.length>0){
          response = {
            error: false,
            code: 200,
            message: 'Name already in use'
          };
          res.status(200).send(response);
        } else {
          db.query(newSprintQuery,[
            req.body.name,
            req.body.projid
          ],(err,result)=>{
            if(err){
              response = {
                error: true,
                code: 500,
                message: err
              };
              res.status(500).send(response);
            }else{
              response = {
                error: false,
                code: 201,
                message: 'Sprint created.'
              };
              res.status(201).send(response);
            }
          });
        }
      }
    });
  }
});

app.post('/api/getsprints', (req,res,next)=>{
  let sprintsQuery = 'SELECT name FROM sprint WHERE project_id = ?';
  if(!req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(sprintsQuery,[
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        res.status(200).send(result);
      }
    });
  }
});

app.post('/api/currsprint', (req,res,next)=>{
  let cursprintQ = 'SELECT sprint_id FROM sprint WHERE project_id = ? AND name = ?';
  if(!req.body.projid || !req.body.name.trim()){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(cursprintQ,[
      req.body.projid,
      req.body.name
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      }else{
        res.status(200).send(result);
      }
    })
  }
});

app.post('/api/getstories', (req,res,next)=>{
  let storiesQ = 'SELECT story_id, description, col_id FROM story WHERE project_id = ? AND sprint_id = ?';
  if(!req.body.projid || !req.body.sprintid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(respopnse);
  } else {
    db.query(storiesQ,[
      req.body.projid,
      req.body.sprintid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        res.status(200).send(result);
      }
    });
  }
});

app.post('/api/poststory', (req,res,next)=>{
  let storyQ = 'INSERT INTO story (description,sprint_id,project_id,col_id) VALUES (?,?,?,1)';
  let checkStory = 'SELECT * FROM story WHERE description = ? AND sprint_id = ? AND project_id = ?';
  if(!req.body.description.trim() || !req.body.sprintid || !req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(checkStory,[
      req.body.description,
      req.body.sprintid,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response={
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      }else{
        if(result.length > 0){
          response={
            error: true,
            code: 201,
            message: 'This story already exists.'
          };
          res.status(201).send(response);
        } else {
          db.query(storyQ,[
            req.body.description,
            req.body.sprintid,
            req.body.projid
          ],(err,result)=>{
            if(err){
              response = {
                error: true,
                code: 500,
                message: err
              };
              res.status(500).send(response);
            }else{
              response = {
                error: false,
                code: 200,
                message: 'Story created'
              };
              res.status(200).send(response);
            }
          });
        }
      }
    });
  }
});

app.put('/api/updstorycol', (req,res,next)=>{
  let colUpd = 'UPDATE story SET col_id = ? WHERE description = ? AND sprint_id = ? AND project_id = ?';
  if(!req.body.colid || !req.body.storyname.trim() || !req.body.sprintid || !req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(colUpd,[
      req.body.colid,
      req.body.storyname,
      req.body.sprintid,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'Updated'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.post('/api/sprintstatus',(req,res,next)=>{
  let statusQ = 'SELECT done FROM sprint WHERE sprint_id = ? AND project_id = ?';
  if(!req.body.sprintid || !req.body.projid){
    response = {
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(statusQ,[
      req.body.sprintid,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        req.status(500).send(response);
      } else {
        res.status(200).send(result);
      }
    });
  }
});

app.put('/api/endsprint', (req,res,next) => {
  let endQ = 'UPDATE sprint SET done = 1 WHERE sprint_id = ? AND project_id = ?';
  if(!req.body.sprintid || !req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(endQ,[
      req.body.sprintid,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'Sprint finished succesfully'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.post('/api/unfinishedstories',(req,res,next)=>{
  let notFinQ = 'SELECT story_id FROM story WHERE col_id < 6 AND sprint_id = ? AND project_id = ?';
  if(!req.body.sprintid || !req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(notFinQ,[
      req.body.sprintid,
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        res.status(200).send(result);
      }
    });
  }
});

app.put('/api/movestory', (req,res,next) => {
  let moveQ = 'UPDATE story SET sprint_id = ? , col_id = 1 WHERE project_id = ? AND story_id = ?';
  if(!req.body.sprintid || !req.body.projid || !req.body.storyid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(moveQ,[
      req.body.sprintid,
      req.body.projid,
      req.body.storyid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'Updated'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.put('/api/editstory', (req,res,next)=>{
  let editStory = 'UPDATE story SET description = ? WHERE sprint_id = ? AND project_id = ? AND description = ?';
  if(!req.body.newstory.trim() || !req.body.sprintid || !req.body.projid || !req.body.oldstory.trim()){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(editStory,[
      req.body.newstory,
      req.body.sprintid,
      req.body.projid,
      req.body.oldstory
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        response = {
          error: false,
          code: 200,
          message: 'Updated succesfully'
        };
        res.status(200).send(response);
      }
    });
  }
});

app.post('/api/getnextsprint', (req,res,next)=>{
  let nextQ = 'SELECT sprint_id FROM sprint WHERE project_id = ?';
  if(!req.body.projid){
    response={
      error: true,
      code: 400,
      message: 'Missing Data'
    };
    res.status(400).send(response);
  } else {
    db.query(nextQ,[
      req.body.projid
    ],(err,result)=>{
      if(err){
        response = {
          error: true,
          code: 500,
          message: err
        };
        res.status(500).send(response);
      } else {
        res.status(200).send(result);
      }
    });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/scrum-metrics/index.html'));
});
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

module.exports = app;
