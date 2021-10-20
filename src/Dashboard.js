import React, { useState } from "react";
import LatestCategory from "./LatestCategory";
import women from "./images/women.PNG";
import { BrowserRouter as Routers, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import Main from "./Main";
import NavbarDashboard from "./NavbarDashboard";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState("");
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div>
      <div className="main-container">
        <Routers>
          <Route path="/Dashboard" component={NavbarDashboard} />
          {/* <NavbarDashboard
            sidebarOpen={sidebarOpen}
            openSidebar={openSidebar}
          /> */}

          {/* <Main /> */}
          <Switch>
            <Route path="/Dashboard" exact component={Main} />
            <Route
              path="/Dashboard/Book_Management"
              exact
              component={LatestCategory}
            />
          </Switch>
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        </Routers>

        {/* <Sidebar /> */}
      </div>
      <Link to="/Home">
        <div className="sidebar_link_leave">
          <i className="fa fa-sign-out"></i>
          <a href="" className="GoHome">
            Leave
          </a>
        </div>
      </Link>
    </div>
  );
}
// const Navbar = ({ sidebarOpen, openSidebar }) => {
//   return (
//     <nav className="navbar">
//       <div className="nav_icon" onClick={() => openSidebar}>
//         <i className="fa fa-bars"></i>
//       </div>
//       <div className="navbar_left">
//         <a href="">Subscribers</a>
//         <a href="">Book Management</a>
//         <a href="" className="active_link">
//           Admin
//         </a>
//       </div>
//       <div className="navbar_right">
//         <a href="">
//           <i className="fa fa-search"></i>
//         </a>
//         <a href="" className="fa fa-clock-o"></a>
//         <a href="">
//           <img width="30px" src={women} alt="" />
//         </a>
//       </div>
//     </nav>
//   );
// };
export default Dashboard;
