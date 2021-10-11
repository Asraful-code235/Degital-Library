import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { render } from "@testing-library/react";

const latestitem = [
  {
    id: 1,
    src: "https://images-na.ssl-images-amazon.com/images/I/81MgsNre3IL._AC_UL200_SR200,200_.jpg",
    info: "Authors name",
  },
];

function LatestCategory() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [bookList, setBookList] = useState([]);
  const addBooks = () => {
    axios
      .post("http://localhost:3001/create", {
        title: title,
        author: author,
        category: category,
        price: price,
      })
      .then(() => {
        console.log("success");
      });
  };
  const getBooks = () => {
    axios.get("http://localhost:3001/books").then((response) => {
      setBookList(response.data);
      console.log(response);
    });
  };
  const [name, setName] = useState();
  const [file, setFile] = useState();
  const send = (event) => {
    const data = new FormData();
    data.append("file", file);
    axios
      .post("http://localhost:3000/upload", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section data-aos="fade-up" className="latestCategory">
        <div className="container">
          <p className="Field">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter book title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </p>
          <p className="Field">
            <label htmlFor="">Author</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter author name"
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </p>
          <p className="Field">
            <label htmlFor="">Category</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter category"
              onChange={(event) => {
                setCategory(event.target.value);
              }}
            />
          </p>
          {/* <p className="Field">
            <label htmlFor="">Date</label>
            <input
              type="datetime-local"
              name=""
              id=""
              placeholder="Enter time"
              onChange={(event) => {
                setAuthor(event.target.value);
              }}
            />
          </p> */}
          <p className="Field ">
            <label htmlFor="">Price</label>
            <input
              type="number"
              name=""
              id=""
              placeholder="Enter book price"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />
          </p>
          <form action="#" className="Field">
            <label htmlFor="">Image</label>
            <input
              type="file"
              name="image"
              id="name"
              onChange={(event) => {
                const file = event.target.files[0];
                setFile(file);
              }}
            />
            <button type="submit" onClick={send}>
              click
            </button>
          </form>

          <button type="submit" className="submit" onClick={addBooks}>
            Add
          </button>
          {/* <div>
            <button type="submit" className="show" onClick={getBooks}>
              Show
            </button>
            {bookList.map((val) => {
              return (
                <div className="containerBooks">
                  <h1>{val.Title}</h1>
                  <p>{val.Author}</p>
                  <h4>{val.Price}</h4>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>
    </>
  );
}

export default LatestCategory;
