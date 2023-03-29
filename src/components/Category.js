import React, { useState } from 'react';

const Category = ({ title, budget, spent, onUpdateRemaining }) => {
  const [remainingInput, setRemainingInput] = useState(budget - spent);

  const handleSave = () => {
    onUpdateRemaining(title, parseFloat(remainingInput));
  };

  return (
    <div>
      <h3>{title}</h3>
      <p>Spent: {spent}</p>
      <p>
        Remaining:
        <input
          type="number"
          step="0.01"
          min="0"
          value={remainingInput}
          onChange={(e) => setRemainingInput(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </p>
    </div>
  );
};

export default Category;
