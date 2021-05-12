const Blog = require('../models/Blog');

exports.createBlog = async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/");
};

exports.editBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  blog.title = req.body.title;
  blog.detail = req.body.detail;
  blog.save();
  res.redirect(`/post/${req.params.id}`);
};

exports.deleteBlog = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
