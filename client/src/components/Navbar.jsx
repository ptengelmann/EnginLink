// components/Navbar.jsx
import React from 'react';
import './Navbar.scss';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">EnginLink</div>
      <ul className="navbar__menu">
        <li>Explore</li>
        <li>Academy</li>
        <li>Jobs</li>
        <li>Login</li>
        <li className="cta">Join</li>
      </ul>
    </nav>
  );
}
