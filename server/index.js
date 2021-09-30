const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "librarysystem",
});

app.post("/create", (req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const price = req.body.price;

  db.query(
    "INSERT INTO books (title, author, price) VALUES(?,?,?)",
    [title, author, price],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});

app.get("/books", (req, res) => {
  db.query("SELECT * FROM books", (err, result) => {
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
