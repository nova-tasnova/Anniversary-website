import React from 'react';
import { Heart } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import Counter from './Counter';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content animate-fade-in">
        <h1>The Tom and Jerry</h1>
        <div className="heart-icon"><Heart size={48} color="#ff4081" fill="#ff4081" className="pulse-animation" /></div>
        <p className="subtitle">4 Years Spent Beautifully... Filled with fights, laughter, and infinite love!</p>
        <Counter />
      </div>
    </section>
  );
}
