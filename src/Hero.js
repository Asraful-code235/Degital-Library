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
          <Component3 />
        </div>
      </div>
    </section>
  );
}
const Component1 = () => {
  // const popup = document.querySelector(".category-list");
  // const linkActive = document.querySelector(".category-item");
  // const categoryRight = document.querySelector(".category-layout");
  // const hoverEffect = document.querySelector(".link");
  // const popHandler = () => {
  //   popup.classList.add("block");
  //   hoverEffect.classList.add("activate");
  //   categoryRight.addEventListener("mouseover", () => {
  //     hoverEffect.classList.add("activate");
  //     linkActive.classList.add("Active");
  //     popup.classList.add("block");
  //   });
  // };
  // const popOut = () => {
  //   popup.classList.remove("block");
  //   hoverEffect.classList.remove("activate");
  //   categoryRight.addEventListener("mouseout", () => {
  //     hoverEffect.classList.remove("activate");
  //     linkActive.classList.remove("Active");
  //     popup.classList.remove("block");
  //   });
  // };
  return (
    <div className="category-left">
      <div className="left-title">
        <a href="">My Library</a>
      </div>

      <div className="left-market">
        {categoryItem.map((item) => {
          return (
            <div key={item.id} className="link">
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
  return (
    <>
      <div className="category-right">
        <div className="category-list">
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
const Component3 = () => {
  // const slider = document.querySelector(".slider");
  // const slides = document.getElementsByClassName("slide");
  // const NumOfSlide = slides.length;
  // var currentPosition = 0;

  // var playSlider;
  // var repeater = () => {
  //   playSlider = setInterval(() => {
  //     slides.forEach((slides) => {
  //       slides.classList.remove("slideshow");
  //     });
  //     currentPosition++;
  //     if (currentPosition > NumOfSlide - 1) {
  //       currentPosition = 0;
  //     }
  //     slides[currentPosition].classList.add("slideshow");
  //   }, 3000);
  // };
  // repeater();

  return (
    <>
      <div className="col-right">
        <div className="slider">
          <div className="slide">
            <img src="./1.jpg" alt="" />
            <div className="info">
              <h3>Getting Books Made Easy</h3>
              <p>Get your favourite book with just a click of a button</p>
            </div>
          </div>
          <div className="slide active">
            <img src="./differentbooks.jpg" alt="" />
            <div className="info">
              <h3>Getting Books Made Easy</h3>
              <p>Get your favourite book with just a click of a button</p>
            </div>
          </div>
          <div className="slide active">
            <img src="./Personreading.jpg" alt="" />
            <div className="info">
              <h3>Getting Books Made Easy</h3>
              <p>Get your favourite book with just a click of a button</p>
            </div>
          </div>
          <div className="slide active">
            <img src="./py.jpg" alt="" />
            <div className="info">
              <h3>Getting Books Made Easy</h3>
              <p>Get your favourite book with just a click of a button</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
