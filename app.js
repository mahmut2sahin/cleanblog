const express = require("express");
const ejs = require("ejs");
const Blog = require("./models/Blog");

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

// ? POST SAYFASI????
app.get("/post", (req, res) => {
  res.render("post");
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
