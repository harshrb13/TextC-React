import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
    <>
    <nav className={`navbar navbar-expand-lg text-light  bg-${props.mode}`} id = 'nav'>
  <div className="container-fluid ">
    <Link className="navbar-brand text-light font-weight-light" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon "></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about">{props.info}</Link>
        </li>
      </ul>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch"onClick={props.toggleMod} id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Mode</label>
</div>
    </div>
  </div>
</nav>
    </>
    )
}
Navbar.propTypes = {
    title : PropTypes.string,
    info : PropTypes.string
}

Navbar.defaultProps = {
    title : "hiiii",
    info : "hello"
}
