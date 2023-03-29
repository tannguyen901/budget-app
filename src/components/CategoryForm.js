import React, { useState } from 'react';
import { Form, Input, Button } from '../styles/styles';
const CategoryForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, budget: parseFloat(budget), spent: 0 });
    setTitle('');
    setBudget('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Category"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="number"
        step="1.00"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <Button type="submit">Add Category</Button>
    </Form>
  );
};

export default CategoryForm;
