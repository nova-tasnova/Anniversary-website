import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import './ReasonGenerator.css';

const reasons = [
  "Because of the way you look at me.",
  "Your smile brightens even my darkest days.",
  "You always know how to make me laugh.",
  "The way you support my dreams.",
  "Because you are my safest place.",
  "Your warm, tight hugs.",
  "Because of the million little memories we've made.",
  "You accept me exactly as I am.",
  "Because you are my best friend and my true love.",
  "The way your hand fits perfectly in mine."
];

export default function ReasonGenerator() {
  const [currentReason, setCurrentReason] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const generateReason = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * reasons.length);
      setCurrentReason(reasons[randomIndex]);
      setIsAnimating(false);
    }, 500); // Wait for the fade out
  };

  return (
    <section id="reasons" className="reason-section container text-center">
      <h2 className="section-title">Need a <span className="gradient-text">Reason?</span></h2>
      <p className="reason-subtitle">Click the button below to see why I love you...</p>
      
      <div className="reason-card glass-card">
        <button className="reason-button" onClick={generateReason}>
          <Sparkles size={24} className="sparkle-icon" />
          Tell Me Why
        </button>
        
        <div className={`reason-display ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          {currentReason ? (
            <p className="reason-text">"{currentReason}"</p>
          ) : (
            <p className="reason-placeholder">Waiting for a reason...</p>
          )}
        </div>
      </div>
    </section>
  );
}
