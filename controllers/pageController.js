const Blog = require('../models/Blog');

exports.getHomePage = async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", { blogs });
};

exports.getAboutPage = (req, res) => {
  res.render("about");
};

exports.getAddPage = (req, res) => {
  res.render("add_post");
};

exports.getBlogPage = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("post", { blog });
};

exports.getEditPage = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("edit", { blog });
};