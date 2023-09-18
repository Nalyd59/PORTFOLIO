import React from "react";
import logo from "./logo.png"
import { useNavigate } from 'react-router-dom';
import './navbar.css'

function Navbar() {
  let btn = "Connexion";
  if (localStorage.getItem('user')) {
    btn = 'Deconnexion'
  } else {
    btn = 'Connexion'
  }
  const navigate = useNavigate();
  function toggleMenu() {
    if (localStorage.getItem('user')) {
      localStorage.clear()
      navigate('/')
    } else {
      navigate('/connexion')
    }
  }
  return (
    <>
      <nav className="navbar">
          <a href="/">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <ul>
            <li className="menu-item"><a href="#formations">Formations</a></li>
            <li className="menu-item"><a href="#projets">Projets</a></li>
            <li className="menu-item"><a href="#contact">Contact</a></li>
          </ul>
          <button onClick={toggleMenu}>{btn}</button>
      </nav>
    </>
  );
}

export default Navbar;
