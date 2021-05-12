const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Connecting DB
mongoose
  .connect(
    "mongodb+srv://mahmutsahin:Os2CbbzqKVRAjIiS@cluster0.nhm6y.mongodb.net/cleanblog-db?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("DB is connected!");
  })
  .catch((err) => {
    console.log(err);
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
