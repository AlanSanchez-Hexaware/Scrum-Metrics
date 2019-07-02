const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
  next();
});

app.post("/api/postuser", (req, res, next) => {

});

app.get("/api/postuser", (req, res, next) => {
  res.send("hello there");
});

app.post("/api/posts", (req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Success'
  });
});

app.use("/api/posts", function(req, res, next){
  const posts = [
    {
      id: "iauf9wefuo",
      title: "First post",
      content: "content1"
    },
    {
      id: "iaa9wasdfo",
      title: "second post",
      content: "content2"
    }
  ];
  res.status(200).json({
    message: "Post succesfull",
    posts: posts
  });
});

module.exports = app;
