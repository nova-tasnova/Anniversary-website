import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import OurStory from './components/OurStory';
import ReasonGenerator from './components/ReasonGenerator';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Hero />;
      case 'story':
        return <OurStory />;
      case 'gallery':
        return <Gallery />;
      case 'reasons':
        return <ReasonGenerator />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="app-container">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <FloatingHearts />
      <div className="page-transition-wrapper" key={activePage}>
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
