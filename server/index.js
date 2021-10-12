const express = require("express");
const app = express();
const mysql = require("mysql");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const util = require("util");

app.use(cors());
app.use(express.json());
app.use("/public", express.static("public"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});
var upload = multer({ storage: storage });

// const upload = multer({ storage }).single("file");
// app.post("/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       return res.status(500).json(err);
//     }
//     return res.status(200).send(req.file);
//   });
// });

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "librarysystem",
});
db.connect(function (err) {
  if (err) {
    return console.error("error" + err.message);
  }
  console.log("connected");
});
app.post("/create", upload.single("myfile"), (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const category = req.body.category;
  const price = req.body.price;
  const image = req.file.filename;
  db.query(
    "INSERT INTO books (title, author,category, price,image) VALUES(?,?,?,?,?)",
    [title, author, category, price, image],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});
//image
// app.post("", (req, res) => {
//   let sampleFile;
//   let uploadPath;
//   if (!req.files || Object.keys(req.files).length === 0) {
//     return res.status(400).send("No files were uploaded.");
//   }
//   sampleFile = req.files.sampleFile;
//   uploadPath = __dirname + "/upload" + sampleFile.name;
//   sampleFile.mv(uploadPath, function (err) {
//     if (err) return res.status(500).send(err);
//     res.send("File uploaded");
//   });
// });

app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

//updating database
app.put("/update", (req, res) => {
  const id = req.body.id;
  const title = req.body.title;

  db.query(
    "UPDATE books SET title = ? WHERE id= ?",
    [title, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/author", (req, res) => {
  const id = req.body.id;
  const author = req.body.author;
  db.query(
    "UPDATE books SET author= ? WHERE id= ?",
    [author, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
app.put("/price", (req, res) => {
  const id = req.body.id;
  const price = req.body.price;
  db.query(
    "UPDATE books SET price= ? WHERE id= ?",
    [price, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

//deleting from database

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM books WHERE id=?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("works server running 3001");
});
