import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
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

      // console.log("blocked");
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
                  category: val.category,
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
                  category: val.category,
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
                  image: val.image,
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
  const [newImage, setNewImage] = useState("");
  const updateImage = (id) => {
    axios
      .put("http://localhost:3001/image", { image: newImage, id: id })
      .then((response) => {
        alert("updating please wait for sometime !");
        setNewImage(
          bookList.map((val) => {
            return val.id == id
              ? {
                  id: val.id,
                  title: val.title,
                  author: val.author,
                  price: val.Price,
                  category: val.category,
                  image: val.newImage,
                }
              : val;
          })
        );
      });
  };
  // const handelDownload = (id) => {
  //   axios
  //     .get({
  //       url: "http://localhost:3001/public/images",
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       // var fileURL = window.URL.createObjectURL(new Blob([response.data]));
  //       // var fileLink = document.createElement("a");

  //       // fileLink.href = fileURL;
  //       // fileLink.setAttribute("download", "file.pdf");
  //       // document.body.appendChild(fileLink);
  //       // fileLink.click();
  //     });
  // };

  return (
    <section data-aos="fade-up" className="ImageGrid" onMouseEnter={getBooks}>
      <div className="control">
        <ul>
          <li>All</li>
          <li>Latest</li>
        </ul>
      </div>
      <div className="GridContainer">
        {bookList.map((val) => {
          return (
            <div className="containerBooks" key={val.id}>
              <div className="imgContainer">
                <img src={`http://localhost:3001/public/images/${val.image}`} />
              </div>
              <div className="info">
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
                      <MdUpdate color="white" fontSize="1.5em" />
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
                    <button onClick={() => updateAuthor(val.id)}>
                      <MdUpdate color="white" fontSize="1.5em" />
                    </button>
                  </div>
                  <div className="btn">
                    <input
                      type="number"
                      placeholder="New Price "
                      onChange={(event) => {
                        setNewPrice(event.target.value);
                      }}
                    />
                    <button onClick={() => updatePrice(val.id)}>
                      <MdUpdate color="white" fontSize="1.5em" />
                    </button>
                  </div>
                  <div>
                    <label htmlFor="">pdf</label>
                    <input
                      type="file"
                      name="myfile"
                      id="name"
                      autoComplete="off"
                      onChange={(event) => {
                        setNewImage(event.target.files[0]);
                      }}
                    />
                    <button onClick={() => updateImage(val.id)}>Update</button>
                  </div>
                  <div className="btnControl">
                    <button
                      className="btnDelete"
                      onClick={() => deleteBooks(val.id)}
                    >
                      <AiFillDelete color="white" fontSize="1.5em" />
                    </button>
                    <button
                      className="btnDownload"
                      onClick={() => deleteBooks(val.id)}
                    >
                      <FaFileDownload color="#fff" fontSize="1.5em" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ItemsShow;
