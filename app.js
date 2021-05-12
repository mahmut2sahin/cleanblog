const express = require("express");
const ejs = require("ejs");
const Blog = require("./models/Blog");
const { Mongoose } = require("mongoose");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Template Engine
app.set("view engine", "ejs");
// Static files
app.use(express.static("public"));

// !Routes
app.get("/", async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", { blogs });
});
app.get("/index", async (req, res) => {
  const blogs = await Blog.find({});
  res.render("index", { blogs });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/add_post", (req, res) => {
  res.render("add_post");
});
app.post("/blogs", async (req, res) => {
  await Blog.create(req.body);
  res.redirect("add_post");
});
app.get("/post/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.render("post", { blog });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
