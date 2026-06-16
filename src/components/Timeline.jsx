import React from 'react';
import './Timeline.css';

const milestones = [
  {
    year: 'School Days',
    title: 'First Meet',
    description: 'Felfel chokh e takai thakto amr dike... those innocent glances were the start of everything.',
  },
  {
    year: '2022',
    title: 'The Proper Meet',
    description: 'We finally met properly at Jahangirnagar University, right in my campus. The beginning of our beautiful journey.',
  },
  {
    year: 'Present',
    title: 'Chittagong Medical College',
    description: 'Now you are an intern doctor at CMC, and we share so many beautiful memories meeting there too.',
  }
];

export default function Timeline() {
  return (
    <section id="timeline" className="timeline-section container">
      <h2 className="section-title">Our <span className="gradient-text">Journey</span></h2>
      <div className="timeline">
        {milestones.map((m, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-card">
              <span className="timeline-year">{m.year}</span>
              <h3>{m.title}</h3>
              <p>{m.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
