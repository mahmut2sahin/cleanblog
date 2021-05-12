const express = require("express");
const methodOverride = require("method-override");
const ejs = require("ejs");
const pageController = require('./controllers/pageController');
const blogController = require('./controllers/blogController');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["GET", "POST"] }));

// Template Engine
app.set("view engine", "ejs");
// Static files
app.use(express.static("public"));

// !Routes
app.get("/", pageController.getHomePage);
app.get("/index", pageController.getHomePage);
app.get("/about", pageController.getAboutPage);
app.get("/add_post", pageController.getAddPage);
app.get("/post/:id", pageController.getBlogPage);
app.get("/edit/:id", pageController.getEditPage);
app.post("/blogs", blogController.createBlog);
app.put("/edit/:id", blogController.editBlog);
app.delete("/post/:id", blogController.deleteBlog);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
