import React, { useState } from "react";
import "./Navbar2.css";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../Home/SidebarData";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { RxCross1 } from "react-icons/rx";

const Navbar2 = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "#e3d53e" : "white",
    };
  };

  return (
    <>
      <div className="navbar2">
        <nav className="aboutNav">
          <IconContext.Provider
            value={{ color: "#daab2b", className: "icon1" }}
          >
            <div className="leftNav">
              <NavLink to="/" className="link">
                <div>
                  <img src="https://firebasestorage.googleapis.com/v0/b/divine-public-school-e196f.appspot.com/o/websiteImages%2Fhome%2FmainImage%2FGroup%201.png?alt=media&token=2af23d25-d3ce-4e0d-bd8d-92c9759108f7" alt="Logo" />
                </div>
              </NavLink>
            </div>
            <div className="menu-icon1" onClick={handleShowNavbar}>
              <GiHamburgerMenu />
            </div>

            <div className={`nav-elements  ${showNavbar && "active"}`}>
              <div className="menu-icon2" onClick={handleShowNavbar}>
                <RxCross1 />
              </div>
              <ul>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                      <NavLink
                        style={navLinkStyles}
                        to={item.path}
                        data-text={item.text}
                      >
                        <span>{item.title}</span>
                      </NavLink>
                      <hr className="aboutLine" />
                    </li>
                  );
                })}
              </ul>
            </div>
          </IconContext.Provider>
        </nav>
      </div>
    </>
  );
};

export default Navbar2;


