import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import GridShow from "./ItemsShow";
import LatestCategory from "./LatestCategory";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <LatestCategory />
      <GridShow />
    </div>
  );
}

export default App;
