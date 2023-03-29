import React, { useState } from 'react';
import {
  Container,
  Content,
  CategoryContainer,
  CategoryTitle,
  Button,
  Input
} from "../styles/styles";
const Category = ({ title, budget, spent, onUpdateRemaining, onDelete  }) => {
  const [remainingInput, setRemainingInput] = useState(budget - spent);

  const handleSave = () => {
    onUpdateRemaining(title, parseFloat(remainingInput));
  };

  const handleDelete = () => {
    onDelete(title)
  }

  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <p>Spent: {spent}</p>
      <p>
        Remaining:
        <Input
          type="number"
          step="1.00"
          min="0"
          value={remainingInput}
          onChange={(e) => setRemainingInput(e.target.value)}
        />
        <Button onClick={handleSave}>Save</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </p>
    </CategoryContainer>
  );
};

export default Category;
