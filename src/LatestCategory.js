import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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
  return (
    <>
      <section data-aos="fade-up" className="latestCategory">
        <div className="container">
          <div className="latestImage">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81MgsNre3IL._AC_UL200_SR200,200_.jpg"
              alt="img1"
            />
          </div>
          <div className="imgInfo">
            <div className="mainInfo">
              <h1> Latest Books Of You'r Liking</h1>
            </div>
            <div className="content-info">
              <ul>
                <li>
                  <span className="span">Title:</span>The Wish
                </li>
                <li>
                  <span className="span">Author:</span>Nicholas Sparks
                </li>
                <li>
                  <span className="span">Release Date:</span>20-2-2021
                </li>
              </ul>
            </div>
          </div>
        </div>
      
      </section>
    </>
  );
}

export default LatestCategory;
