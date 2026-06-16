import React from 'react';
import { MessageCircleHeart } from 'lucide-react';
import './Thoughts.css';

const notes = [
  {
    year: '2016',
    text: "ei mahadir baccha ta k ?? samne pele khun korbo...",
  },
  {
    year: '2022',
    text: "kotha theke ure ese jure boslo...",
  },
  {
    year: '2026',
    text: "My everything.. Thanks to Allah for everything ❤️",
  }
];

export default function Thoughts() {
  return (
    <section id="thoughts" className="thoughts-section container">
      <h2 className="section-title">My Thoughts on <span className="gradient-text">You</span></h2>
      <div className="thoughts-grid">
        {notes.map((note, idx) => (
          <div key={idx} className="thought-card glass-card">
            <div className="thought-icon">
              <MessageCircleHeart size={32} color="#ff4081" />
            </div>
            <h4 className="thought-year">{note.year}</h4>
            <p className="thought-text">"{note.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
