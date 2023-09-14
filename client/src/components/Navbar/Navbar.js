import React from "react";
import logo from './logo.png';
import BtnAdmin from '../btnAdmin/BtnAdmin';

function Navbar() {
  return (
    < >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div style={{marginRight: '10px'}}>
            <BtnAdmin/>
          </div>
          
          <a className="navbar-brand" href="/">
            <h2>CREPIN Dylan</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Accueil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projets">
                  Projets
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/Formations">
                  Formations
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/Competences">
                  Competences
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/Services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true" href="/Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
