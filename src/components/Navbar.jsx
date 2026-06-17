import React from 'react';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container container" style={{ justifyContent: 'flex-end' }}>
        <ul className="navbar-links">
          <li className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>Home</li>
          <li className={activePage === 'gallery' ? 'active' : ''} onClick={() => setActivePage('gallery')}>Gallery</li>
          <li className={activePage === 'story' ? 'active' : ''} onClick={() => setActivePage('story')}>Our Story</li>
          <li className={activePage === 'reasons' ? 'active' : ''} onClick={() => setActivePage('reasons')}>Reasons</li>
        </ul>
      </div>
    </nav>
  );
}
