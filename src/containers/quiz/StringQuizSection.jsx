import React, { useState } from 'react';
import './StringQuizSection.css'; // Import your CSS file for styling

const StringQuizSection = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const correctAnswer = 'The Protection of Women from Domestic Violence Act,2005'; // The correct answer for the quiz

  const options = ['Section 498A of the Indian Penal Code', 'Section 354A of the Indian Penal Code', 'The Protection of Women from Domestic Violence Act,2005', 'The Dowry Prohibition Act'];

  const checkAnswer = () => {
    if (selectedOption === correctAnswer) {
      alert('Correct answer! Well done!');
    } else {
      alert('Incorrect answer. Please try again.');
    }
  };

  return (
    <div className="string-quiz-container">
      <h1>Question of the Day</h1>
      <p>In India, what legal provision protects women from domestic violence?</p>
      <div className="options-container">
        {options.map((option, index) => (
          <label key={index} className="option-label">
            <input className='option-radio'
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={checkAnswer} className="check-button">
        Check Answer
      </button>
    </div>
  );
};

export default StringQuizSection;
