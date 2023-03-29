import React, { useState } from 'react';
import { Form, Input, Select, Button } from '../styles/styles';

const ExpenseForm = ({ categories, onSubmit, onUpdateSpent }) => {
  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetCategory = categories.find((cat) => cat.title === category);
    const updatedSpent = targetCategory.spent + parseFloat(amount);
    onUpdateSpent(category, updatedSpent);
    onSubmit({ date, amount: parseFloat(amount), category });
    setDate('');
    setAmount('');
    setCategory('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <Input
        type="number"
        step="1.00"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="" disabled>
          Select a category
        </option>
        {categories.map((category, index) => (
          <option key={index} value={category.title}>
            {category.title}
          </option>
        ))}
      </Select>
      <Button type="submit">Add Expense</Button>
    </Form>
  );
};

export default ExpenseForm;
