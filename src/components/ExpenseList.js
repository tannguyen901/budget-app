import React, { useState } from "react";
import { ExpensesContainer, Form, Input, Button, ExpensesTitle } from "../styles/styles";

const ExpenseList = ({ expenses = [], onSubmit }) => {
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (item.trim() === "" || amount.trim() === "") return;
  
    const updatedExpenses = [...expenses, { item, amount: parseFloat(amount) }];
    onSubmit(updatedExpenses, parseFloat(amount));
    setItem("");
    setAmount("");
  };
  

  const handleRemoveExpense = (index) => {
    if (window.confirm("Are you sure you want to delete this expense?")) {
      const expenseToRemove = expenses[index];
      const updatedExpenses = expenses.filter((_, idx) => idx !== index);
      onSubmit(updatedExpenses, expenseToRemove.amount);
    }
  };
  return (
    <ExpensesContainer>
      <ExpensesTitle>Expenses</ExpensesTitle>
      <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Expense item"
      />
      <Input
        type="number"
        step="1.00"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button type="submit">Add Expense</Button>
    </Form>
      <ul>
        {expenses.map((expense, idx) => (
          <li key={idx} onClick={() => handleRemoveExpense(idx)}>
            {expense.item} - ${expense.amount}
          </li>
        ))}
      </ul>

    </ExpensesContainer>
  );
};

export default ExpenseList;
