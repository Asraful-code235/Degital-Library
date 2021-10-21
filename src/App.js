import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import GridShow from "./ItemsShow";
import LatestCategory from "./LatestCategory";
import Footer from "./Footer";
import About from "./About";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Navbar} />
        <Route path="/" exact component={Hero} />
        {/* <Route path="/" exact component={LatestCategory} /> */}
        <Route path="/" exact component={GridShow} />
        <Route path="/" exact component={Footer} />

        <Route path="/Home" exact component={Navbar} />
        <Route path="/Home" exact component={Hero} />
        {/* <Route path="/Home" exact component={LatestCategory} /> */}

        <Route path="/Home" exact component={GridShow} />

        <Route path="/Home" exact component={Footer} />
        <Route path="/about" exact component={About} />
        <Route path="/Dashboard" exact component={Dashboard} />
        {/* <Navbar />
        <Hero />
        {/* <LatestCategory /> */}
        {/* <GridShow />  */}
      </div>
    </Router>
  );
}

export default App;
