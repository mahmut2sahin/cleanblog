/*
Clean Blog projemizin bu 2. bölümünde aşağıdaki işlemleri yapalım.

Public klasörü oluşturup statik dosyalarımızı içerisine yerleştirelim.
İlgili middleware fonksiyonunu yazarak public klasörümüzü uygulamamıza kaydedelim.
EJS modülünü indirelim.
Uygulamamızda EJS modülünü kullanacağımızı belirtelim.
Views klasörü oluşturalım ve tüm .html dosyalarımız views klasörü içerisinde .ejs dosyalarına çevirelim.
Partials klasör yapısını oluşturalım.
İlgili yönlendirmeleri ve _navigation.ejs klasöründeki link düzenlemelerini yapalım.
*/

const express = require("express");
const ejs = require('ejs');

const app = express();

// Template Engine
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index")
});

app.get("/index", (req, res) => {
  res.render("index")
});

app.get("/about", (req, res) => {
  res.render("about")
});

app.get("/add_post", (req, res) => {
  res.render("add_post")
});

app.get("/post", (req, res) => {
  res.render("post")
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
