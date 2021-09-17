import React from "react";
import "./css/main.css";
import { categoryItem } from "./HeroLinks";
import { categoryRight } from "./CategoryRight";

function Hero() {
  return (
    <section className="hero">
      <div className="first-screen">
        <div className="first-floor">
          <div className="col-left">
            <div className="home-category">
              <Component1 />
              <Component2 />
            </div>
          </div>
          <div className="col-right"></div>
        </div>
      </div>
    </section>
  );
}

const Component1 = () => {
  const CategoryList = document.querySelector(".category-list");
  const link = document.querySelectorAll(".link");
  const displayList = () => {
    link.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        CategoryList.classList.add("block");
        link.classList.add("activate");

        CategoryList.addEventListener("mouseover", () => {
          CategoryList.classList.add("block");
          // link.classList.add("activate");
        });
      });
      link.addEventListener("mouseout", () => {
        CategoryList.classList.remove("block");
        link.classList.remove("activate");
      });
      CategoryList.addEventListener("mouseout", () => {
        CategoryList.classList.remove("block");
        link.classList.remove("activate");
      });
    });
  };
  displayList();
  return (
    <div className="category-left">
      <div className="left-title">
        <a href="">My Library</a>
      </div>

      <div className="left-market">
        {categoryItem.map((item) => {
          return (
            <div key={item.id} className={item.class} onMouseOver={displayList}>
              <a href="#">
                <div className={item.mainHandler}>
                  <div>
                    <span className="img">
                      <img src={item.spanImg} alt="" />
                    </span>
                    <span className="txt">{item.txt}</span>
                  </div>
                  <i className="prefixed-icon"></i>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Component2 = () => {
  const CategoryList = document.querySelector(".category-list");
  const link = document.querySelectorAll(".link");
  const displayList = () => {
    link.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        CategoryList.classList.add("block");
        link.classList.add("activate");
        CategoryList.addEventListener("mouseover", () => {
          CategoryList.classList.add("block");
          categoryItem.map((prop) => {
            return document.querySelector(".link").classList.add("activate");
          });

          // link.classList.add("activate");
        });
      });
      link.addEventListener("mouseout", () => {
        CategoryList.classList.remove("block");
        link.classList.remove("activate");
      });
      CategoryList.addEventListener("mouseout", () => {
        CategoryList.classList.remove("block");
        link.classList.remove("activate");
      });
    });
  };
  displayList();
  return (
    <>
      <div className="category-right">
        <div className="category-list" onMouseOver={displayList}>
          {categoryRight.map((prop) => {
            return (
              <div key={prop.id} className={prop.closed}>
                <div className="category-layout">
                  <div className="category-items">
                    <h3 className="h3">{prop.txt}</h3>
                    <ul>
                      <li>
                        <a href="">{prop.item1}</a>
                      </li>
                      <li>
                        <a href="">{prop.item2}</a>
                      </li>
                      <li>
                        <a href="">{prop.item3}</a>
                      </li>
                      <li>
                        <a href="">{prop.item4}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Hero;
