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
      
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      if (seconds < 0) {
        minutes--;
        seconds += 60;
      }
      if (minutes < 0) {
        hours--;
        minutes += 60;
      }
      if (hours < 0) {
        days--;
        hours += 24;
      }
      if (days < 0) {
        months--;
        // Get the number of days in the previous month
        const prevMonthDate = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonthDate.getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      setTimeLeft({ years, months, days, hours, minutes, seconds });
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
