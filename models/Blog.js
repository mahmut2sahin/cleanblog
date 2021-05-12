const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Connecting DB
mongoose.connect("mongodb://localhost/cleanblog-test-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const blogSchema = new Schema({
  title: String,
  detail: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
