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
