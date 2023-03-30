import React, { useState } from 'react';
import { Form, Input, Button } from '../styles/styles';

const CategoryForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "") return;

    onSubmit({ title, spent:0, expenses: [] });
    setTitle("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter category name"
      />
      <Button type="submit">Add Category</Button>
    </Form>
  );
};

export default CategoryForm;
