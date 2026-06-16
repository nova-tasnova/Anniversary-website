import React, { useState, useEffect } from 'react';
import './Counter.css';

export default function Counter() {
  const startDate = new Date('2022-06-25T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - startDate.getTime();

      const seconds = Math.floor((difference / 1000) % 60);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      
      const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      const months = Math.floor(remainingDays / 30);
      const exactDays = remainingDays % 30;

      setTimeLeft({ years, months, days: exactDays, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="counter-container glass-card">
      <h3 className="counter-title">Time We've Spent Together</h3>
      <div className="counter-grid">
        <div className="counter-item">
          <span className="counter-number">{timeLeft.years}</span>
          <span className="counter-label">Years</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeLeft.months}</span>
          <span className="counter-label">Months</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeLeft.days}</span>
          <span className="counter-label">Days</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeLeft.hours}</span>
          <span className="counter-label">Hours</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeLeft.minutes}</span>
          <span className="counter-label">Mins</span>
        </div>
        <div className="counter-item">
          <span className="counter-number">{timeLeft.seconds}</span>
          <span className="counter-label">Secs</span>
        </div>
      </div>
    </div>
  );
}
