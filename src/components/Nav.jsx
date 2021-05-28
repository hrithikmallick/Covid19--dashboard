import React from 'react';
import {
    Link
 } from "react-router-dom";
import "./Nav.css";

export const Nav = (props) => {
    return (
       <React.Fragment>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active link" aria-current="page" to="/">Home</Link>
                </li>
               
                <li className="nav-item">
                    <Link className="nav-link active link" to="/world">World</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>
       </React.Fragment>
    )
}
export default Nav;