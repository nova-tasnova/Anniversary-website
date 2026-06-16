import React, { useState, useRef } from 'react';
import { Play, Pause, Music } from 'lucide-react';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player-wrapper">
      {/* We are using a placeholder audio file here until provided */}
      <audio ref={audioRef} loop>
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <button 
        className={`music-button ${isPlaying ? 'playing' : ''}`} 
        onClick={togglePlay}
        title={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        <Music size={16} className="music-icon" />
      </button>
    </div>
  );
}
