import React, { useEffect, useState } from 'react';
import './FloatingHearts.css';

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate 15 random hearts
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position
      animationDuration: Math.random() * 10 + 10, // 10s to 20s
      animationDelay: Math.random() * 10, // 0s to 10s delay
      size: Math.random() * 15 + 10 // 10px to 25px
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="floating-hearts-container">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size}px`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`
          }}
        ></div>
      ))}
    </div>
  );
}
