import React, { useState } from 'react';
import {
  Container,
  Content,
  CategoryContainer,
  CategoryTitle,
  Button,
  Input
} from "../styles/styles";

const Category = ({ title, spent, onDelete, addSpending  }) => {
  const [amount, setAmount] = useState("");
  const [subcategory, setSubcategory] = useState("");
  const [item, setItem] = useState(""); // Add state for the specific item

  const handleApply = () => {
    if (isNaN(amount) || amount <= 0) return;

    addSpending(title, parseFloat(amount), subcategory, item); // Pass the item to addSpending
    setAmount("");
    setSubcategory("");
    setItem(""); // Reset item field
  };

  const handleDelete = () => {
    onDelete(title)
  }

  return (
    <CategoryContainer>
      <CategoryTitle>{title}</CategoryTitle>
      <p>Spent: {spent}</p>
      <p>
      Item:
      <Input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />
    </p>
      <p>
        Cost:
        <Input
          type="number"
          step="1.00"
          min="0"
          value={amount} // Update the value attribute to use amount state
          onChange={(e) => setAmount(e.target.value)} // Update the onChange attribute to use setAmount
        />
        <Button onClick={handleApply }>Apply</Button>
        <Button onClick={handleDelete}>Delete</Button>
      </p>
    </CategoryContainer>
  );
};

export default Category;
