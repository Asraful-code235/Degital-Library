import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
function ItemsShow() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const [bookList, setBookList] = useState([]);
  const getBooks = () => {
    axios.get("http://localhost:3001/books").then((response) => {
      setBookList(response.data);
      console.log(response.data);
    });
  };
  const [newTitle, setNewTitle] = useState("");
  const updateBooks = (id) => {
    axios
      .put("http://localhost:3001/update", { title: newTitle, id: id })
      .then((response) => {
        alert("Updating please wait for sometime !");
        setNewTitle(
          bookList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  title: val.newTitle,
                  author: val.author,
                  price: val.price,
                }
              : val;
          })
        );
      });
  };
  const [newAuthor, setNewAuthor] = useState("");
  const updateAuthor = (id) => {
    axios
      .put("http://localhost:3001/author", { author: newAuthor, id: id })
      .then((response) => {
        alert("Updating please wait for sometime !");
        setNewAuthor(
          bookList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  title: val.title,
                  author: val.newAuthor,
                  price: val.price,
                }
              : val;
          })
        );
      });
  };
  const [newPrice, setNewPrice] = useState(0);
  const updatePrice = (id) => {
    axios
      .put("http://localhost:3001/price", { price: newPrice, id: id })
      .then((response) => {
        alert("updating please wait for sometime !");
        setNewPrice(
          bookList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  title: val.title,
                  author: val.author,
                  price: val.newPrice,
                  category: val.category,
                  date: val.date,
                }
              : val;
          })
        );
      });
  };
  const deleteBooks = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setBookList(
        bookList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };
  return (
    <section data-aos="fade-up" className="ImageGrid" onMouseEnter={getBooks}>
      <div className="control">
        <ul>
          <li>All</li>
          <li
            onClick={(event) => {
              setLatest(bookList.filter((e) => {}));
            }}
          >
            Latest
          </li>
        </ul>
      </div>
      <div className="GridContainer">
        {bookList.map((val) => {
          return (
            <div className="containerBooks" key={val.id}>
              <div className="imgContainer"></div>
              <h1>{val.Title}</h1>
              <p>Author:{val.Author}</p>
              <p>Category:{val.Category}</p>
              <h4>Price:{val.Price}$</h4>
              <div className="btn_container">
                <div className="btn">
                  <input
                    type="text"
                    placeholder="New title"
                    onChange={(event) => {
                      setNewTitle(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateBooks(val.id);
                    }}
                  >
                    update
                  </button>
                </div>
                <div className="btn">
                  <input
                    type="text"
                    placeholder="New Author "
                    onChange={(event) => {
                      setNewAuthor(event.target.value);
                    }}
                  />
                  <button onClick={() => updateAuthor(val.id)}>update</button>
                </div>
                <div className="btn">
                  <input
                    type="number"
                    placeholder="New Price "
                    onChange={(event) => {
                      setNewPrice(event.target.value);
                    }}
                  />
                  <button onClick={() => updatePrice(val.id)}>update</button>
                </div>
                <button
                  className="btnDelete"
                  onClick={() => deleteBooks(val.id)}
                >
                  <AiFillDelete color="white" fontSize="1.5em" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ItemsShow;
