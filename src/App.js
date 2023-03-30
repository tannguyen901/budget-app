import React, { useState, useMemo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ScatterChart,
  Scatter,
} from "recharts";

import Category from "./components/Category";
import CategoryForm from "./components/CategoryForm";
import {
  Container,
  Content,
  CategoryContainer,
  CategoryTitle,
  Button,
  Title
} from "./styles/styles";

const App = () => {
  const [chartType, setChartType] = useState("pie");
  const [categories, setCategories] = useState([
    { title: "Groceries", budget: 300, spent: 150, expenses: [] },
    { title: "Entertainment", budget: 100, spent: 50, expenses: [] },
  ]);

  const COLORS = useMemo(
    () => ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
    []
  );

  const totalSpent = useMemo(() =>
    categories.reduce((total, category) => total + category.spent, 0)
  , [categories]);

  const pieChartData = useMemo(() =>
    categories.map((category, index) => ({
      name: category.title,
      value: category.spent,
      color: COLORS[index % COLORS.length],
    }))
  , [categories, COLORS]);

  const renderChart = () => {
    switch (chartType) {
      case "bar":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pieChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        );
      case "line":
        return (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={pieChartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        );
      case "pie":
        return (
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
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        );
        case "scatter":
      return (
        <ResponsiveContainer width="100%" height={300}>
        <ScatterChart>
          <XAxis dataKey="name" />
          <YAxis dataKey="value" />
          <CartesianGrid />
          <Tooltip />
          <Legend />
          <Scatter data={pieChartData} fill="#8884d8">
            {pieChartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      );
      default:
        return null;
    }
  };

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  const addSpending = (title, updatedExpenses, amount) => {
    setCategories(
      categories.map((category) =>
        category.title === title
          ? {
              ...category,
              spent: category.spent + amount,
              expenses: updatedExpenses,
            }
          : category
      )
    );
  };
  
  
  const deleteCategory = (title) => {
    setCategories(categories.filter((category) => category.title !== title));
  };

  return (
    <Container>
      <Content>
        <Title>Budget Planner</Title>
        <div>
        {categories.map((category, index) => (
          <Category
            key={index}
            title={category.title}
            spent={category.spent}
            onDelete={deleteCategory}
            addSpending={addSpending}
            expenses={category.expenses}
          >
          </Category>
        ))}
      </div>
      <CategoryContainer>
      <CategoryTitle>Total Spent: {totalSpent}</CategoryTitle>
      <ResponsiveContainer width="100%" height={300}>{renderChart()}</ResponsiveContainer>
      <div>
        <Button
          onClick={() => setChartType("pie")}
          active={chartType === "pie"}
        >
          Pie Chart
        </Button>
        <Button
          onClick={() => setChartType("bar")}
          active={chartType === "bar"}
        >
          Bar Chart
        </Button>
        <Button
          onClick={() => setChartType("line")}
          active={chartType === "line"}
        >
          Line Chart
        </Button>
        <Button
          onClick={() => setChartType("scatter")}
          active={chartType === "scatter"}
        >
          Bubble Chart
        </Button>
      </div>
      </CategoryContainer>
      <CategoryForm onSubmit={addCategory} />
  </Content>
</Container>
  );
};

export default App;

