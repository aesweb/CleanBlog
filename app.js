const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const post = require("./models/Post");
const Post = require("./models/Post");
const methodOverride = require("method-override");


const postController = require('./controllers/postController')
const pageController = require('./controllers/pageController')

const app = express();

//Database Connect
mongoose.connect("mongodb+srv://aesweb:aes.web+-@cluster0.scd1i.mongodb.net/cleanblog-db?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('DB CONNECTED')
}).catch((err) => {
  console.log(err);
})

//Template Engine
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", {
  methods:['POST', 'GET']
}));

//  ROUTES 
app.get("/", postController.getAllPosts);
app.get("/posts/:id", postController.getPost);
app.post("/posts", postController.createPost);
app.get("/posts/edit/:id", postController.updatePost);
app.delete("/posts/:id", postController.deletePost);
app.get("/about", pageController.getAboutPage);
app.get("/post", pageController.getPostPage);
app.get("/add_post", pageController.getAddPage);
app.put("/posts/:id", pageController.getEditPage);



const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on ${port} port`);
});
