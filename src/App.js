import React, { useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import Category from './components/Category';
import ExpenseForm from './components/ExpenseForm';
import CategoryForm from './components/CategoryForm';
import {
  Container,
  Content,
  CategoryContainer,
  CategoryTitle,
} from '../src/styles/styles';

const App = () => {
  const [categories, setCategories] = useState([
    { title: 'Groceries', budget: 300, spent: 150 },
    { title: 'Entertainment', budget: 100, spent: 50 },
  ]);

  const totalSpent = categories.reduce((total, category) => total + category.spent, 0);
  const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];
  const pieChartData = categories.map((category, index) => ({
    name: category.title,
    value: category.spent,
    color: COLORS[index % COLORS.length],
  }));

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const updateRemaining = (title, newRemaining) => {
    setCategories(
      categories.map((category) =>
        category.title === title
          ? { ...category, budget: newRemaining + category.spent }
          : category
      )
    );
  };

  const updateSpent = (title, newSpent) => {
    setCategories(
      categories.map((category) =>
        category.title === title ? { ...category, spent: newSpent } : category
      )
    );
  };

  const addExpense = (expense) => {
    setCategories(
      categories.map((category) =>
        category.title === expense.category
          ? { ...category, spent: category.spent + expense.amount }
          : category
      )
    );
  };

  return (
    <Container>
      <Content>
        <h1>Budget Planner</h1>
        <CategoryForm onSubmit={addCategory}/>
        <ExpenseForm categories={categories} onSubmit={addExpense} onUpdateSpent={updateSpent} />
        <div>
          {categories.map((category, index) => (
            <Category
              key={index}
              title={category.title}
              budget={category.budget}
              spent={category.spent}
              onUpdateRemaining={updateRemaining}
            />
          ))}
        </div>
        <CategoryContainer>
          <CategoryTitle>Total Spent: {totalSpent}</CategoryTitle>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieChartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieChartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </CategoryContainer>
      </Content>
    </Container>
  );
};

export default App;
