import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Guestbook from "./components/guestbook/Guestbook";
import Blog from "./components/blog/Blog";
import "./app.css";
import Logo from "./Assets/logo.svg";

function App() {
  let [switchTo, newSwitchTo] = useState(1);

  function navActive(index) {
    newSwitchTo(index);
  }
  return (
    <div className="body-container">
      <div className="home-links">
        <aside>
          <img src={Logo} className="Logo-pic" alt="Profile" />
          <nav className="nav-links">
            <Link
              className={switchTo === 1 ? "nav-tab active" : "nav-tab"}
              onClick={() => navActive(1)}
              to={"/"}
            >
              Home
            </Link>
            <Link
              className={switchTo === 2 ? "nav-tab active" : "nav-tab"}
              onClick={() => navActive(2)}
              to={"/about"}
            >
              About
            </Link>
            <Link
              className={switchTo === 3 ? "nav-tab active" : "nav-tab"}
              onClick={() => navActive(3)}
              to={"/blog"}
            >
              Blog
            </Link>
            <Link
              className={switchTo === 4 ? "nav-tab active" : "nav-tab"}
              onClick={() => navActive(4)}
              to={"/guestbook"}
            >
              Guestbook
            </Link>
          </nav>
        </aside>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/guestbook" element={<Guestbook />} />
      </Routes>
    </div>
  );
}

export default App;
