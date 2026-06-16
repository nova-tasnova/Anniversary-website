import React from 'react';
import './Navbar.css';

export default function Navbar() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <ul className="navbar-links" style={{ width: '100%', justifyContent: 'flex-end' }}>
          <li onClick={() => scrollTo('gallery')}>Gallery</li>
          <li onClick={() => scrollTo('timeline')}>Our Story</li>
          <li onClick={() => scrollTo('reasons')}>Reasons</li>
        </ul>
      </div>
    </nav>
  );
}
