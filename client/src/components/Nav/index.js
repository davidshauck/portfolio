import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
class Nav extends React.Component {

render() {
  
  function showNavigation() {

  return (
    <div className="navbar-buttons col-7">
      <ul className="navbar-nav">
      <Link to="/about">
      <li className="nav-item">
        <div className="nav-link">About</div>
      </li>
      </Link>
      <Link to="/portfolio">
        <li className="nav-item">
          <div className="nav-link">Portfolio</div>
        </li>
      </Link>
      <Link to="/contact">
      <li className="nav-item">
        <div className="nav-link">Contact</div>
      </li>
      </Link>
      </ul>
    </div>
    )
  
}

return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-dark bg-none">
      <a className="navbar-brand col-4" href="/">{"{ david s. hauck | portfolio }"}</a>
      {showNavigation()}
    </nav >
    )
  }
}
export default Nav;



