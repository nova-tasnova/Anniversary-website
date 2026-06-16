import React from 'react';
import Navbar from './components/Navbar';
import FloatingHearts from './components/FloatingHearts';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import OurStory from './components/OurStory';
import ReasonGenerator from './components/ReasonGenerator';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <FloatingHearts />
      <Hero />
      <Gallery />
      <OurStory />
      <ReasonGenerator />
    </div>
  );
}

export default App;
