import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function ItemsShow() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section data-aos="fade-right" className="ImageGrid">
      <div className="GridContainer"></div>
    </section>
  );
}

export default ItemsShow;
