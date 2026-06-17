import React from 'react';
import './Navbar.css';

export default function Navbar({ activePage, setActivePage }) {
  return (
    <nav className="navbar">
      <div className="navbar-container container" style={{ justifyContent: 'flex-end' }}>
        <ul className="navbar-links">
          <li className={activePage === 'home' ? 'active' : ''} onClick={() => setActivePage('home')}>We😘</li>
          <li className={activePage === 'gallery' ? 'active' : ''} onClick={() => setActivePage('gallery')}>Moments❤️</li>
          <li className={activePage === 'story' ? 'active' : ''} onClick={() => setActivePage('story')}>Memory Box😎</li>
          <li className={activePage === 'reasons' ? 'active' : ''} onClick={() => setActivePage('reasons')}>Click here🥺</li>
        </ul>
      </div>
    </nav>
  );
}
