import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';
import './BucketList.css';

const initialGoals = [
  { id: 1, text: "Travel to an exotic island together", completed: false },
  { id: 2, text: "Adopt a cute pet", completed: false },
  { id: 3, text: "Buy our dream home", completed: false },
  { id: 4, text: "Stay up all night talking under the stars", completed: true },
  { id: 5, text: "Cook a fancy meal together and completely ruin it", completed: true }
];

export default function BucketList() {
  const [goals, setGoals] = useState(initialGoals);

  const toggleGoal = (id) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    ));
  };

  return (
    <section className="bucket-section container">
      <h2 className="section-title">Our <span className="gradient-text">Bucket List</span></h2>
      <p className="bucket-subtitle">Dreams we are chasing together...</p>
      
      <div className="bucket-list-container glass-card">
        <ul className="bucket-list">
          {goals.map(goal => (
            <li 
              key={goal.id} 
              className={`bucket-item ${goal.completed ? 'completed' : ''}`}
              onClick={() => toggleGoal(goal.id)}
            >
              <span className="bucket-icon">
                {goal.completed ? <CheckCircle2 color="#ff4081" /> : <Circle color="#b3b0c4" />}
              </span>
              <span className="bucket-text">{goal.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
