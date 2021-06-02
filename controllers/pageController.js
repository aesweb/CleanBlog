const Post = require("../models/Post");

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getPostPage = (req, res) => {
  res.render("post");
};

exports.getAddPage = (req, res) => {
  res.render("add_post");
};

exports.getEditPage = async (req, res) => {
  const post = await Post.findOne({ _id: req.params.id });
  post.title = req.body.title;
  post.description = req.body.description;
  post.save();

  res.redirect(`/posts/${req.params.id}`);
};
