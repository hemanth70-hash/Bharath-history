import React, {
  useEffect,
  useState
} from "react";

import {
  Link
} from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(
        window.scrollY > 50
      );
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  return (

    <nav
      className={
        scrolled
          ? "navbar navbar-scrolled"
          : "navbar"
      }
    >

      <Link
        to="/"
        className="navbar-logo"
      >
        🏛 Bharat History
      </Link>

      <ul className="navbar-links">

        <li>
          <Link to="/">
            Home
          </Link>
        </li>

        <li>
          <Link to="/timeline">
            Timeline
          </Link>
        </li>

        <li>
          <Link to="/empires">
            Empires
          </Link>
        </li>

        <li>
          <Link to="/figures">
            Figures
          </Link>
        </li>

        <li>
          <Link to="/quiz">
            Quiz
          </Link>
        </li>

        <li>
          <Link to="/battles">
            Battles
          </Link>
        </li>
        


      </ul>
<div className="navbar-btn">

  <div className="india-flag">
    <div className="flag-wheel"></div>
  </div>

  <span>
    Bharat History
  </span>

</div>
    </nav>
  );
}