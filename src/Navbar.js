import React from "react";
import { items } from "./navItems";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="NavbarItems">
        <div className="menu-icon">
          <img
            src="https://images.vexels.com/media/users/3/216637/raw/5cb9c03787ab7860fdd5dc4d13a72043-digital-library-logo-design.jpg"
            alt=""
          />
          <h1 className="navbar-logo">
            Digital <span>Library</span>
          </h1>
        </div>

        <ul className="nav-menu">
          {items.map((item) => {
            return (
              <div key={item.id}>
                <Link to={`/${item.title}`}>
                  <li>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
        <div className="search-box">
          <input
            type="text"
            className="search-txt"
            placeholder="type to search"
          />
          <a href="#" className="search-btn">
            <i className="fa fa-search"></i>
          </a>
        </div>
        <div className="toggle">
          <div
            className="hamburger-container"
            onClick={() => {
              document
                .querySelector(".hamburger-container")
                .classList.toggle("active");
            }}
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
