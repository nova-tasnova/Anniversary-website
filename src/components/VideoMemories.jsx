import React from 'react';
import { Film } from 'lucide-react';
import './VideoMemories.css';

export default function VideoMemories() {
  // Currently using placeholders until .mp4 files are added to assets
  const placeholders = [1, 2];

  return (
    <section className="video-section container">
      <h2 className="section-title"><Film className="inline-icon" /> Video <span className="gradient-text">Memories</span></h2>
      <p className="video-subtitle">Living those beautiful moments all over again...</p>
      
      <div className="video-grid">
        {placeholders.map((item) => (
          <div key={item} className="video-card glass-card">
            <div className="video-placeholder">
              <p>Drop an .mp4 file in the assets folder to display it here!</p>
            </div>
            {/* When actual videos are available, you'd use something like:
            <video className="video-player" controls preload="metadata">
              <source src={yourVideoSrc} type="video/mp4" />
            </video>
            */}
          </div>
        ))}
      </div>
    </section>
  );
}
