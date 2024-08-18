import React from "react";
import "./header.css";
import logo from "../../Assets/imags/logo.png";
import profileImg from "../../Assets/imags/profile-header.jpg";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css"
let Header = () => {
  let handel_toggleLink = e => {
    e.currentTarget.classList.toggle("active");
    let nav_links = document.querySelector(".nav-links");
    console.log(nav_links)
    nav_links.classList.toggle("show");

  };
  function handel_Nav_items (e) {
    let nav_items_parent = document.querySelectorAll(".nav-links li")
    nav_items_parent.forEach(li => {
      li.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  }
  useEffect (_=>{
    AOS.init();
  },[])
  return (
    <header
    data-aos="fade-down" 
      data-aos-duration="200" 
    >
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="toggleLink" onClick={e => handel_toggleLink(e)}>
          <span />
          <span />
          <span />
        </div>
        <nav>
          <div className="search">
            <label htmlFor="search">
              <BsSearch color="" />
            </label>
            <input type="text" id="search" placeholder="type Something" />
          </div>
          <ul className="nav-links" id="nav-links">
            <li className={`${location.pathname == "/index.html" ? "active": location.pathname == "/"? "active" : ""}`} onClick={e=> handel_Nav_items(e)}>
              <Link to="/">home</Link>
            </li>
            <li className={location.pathname == "/browse" ? "active": ""} onClick={e=> handel_Nav_items(e)}>
              <Link to="/browse">browse</Link>
            </li>
            <li className={location.pathname == "/details" ? "active": ""}  onClick={e=> handel_Nav_items(e)}>
              <Link to="/details">details</Link>
            </li>
            <li className={location.pathname == "/streams" ? "active": ""}  onClick={e=> handel_Nav_items(e)}>
              <Link to="/streams">streams</Link>
            </li>
            <li className={location.pathname == "/profile" ? "active": ""}  onClick={e=> handel_Nav_items(e)}>
              <Link to="/profile">
                <span>profile</span>
                <img src={profileImg} alt="" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
