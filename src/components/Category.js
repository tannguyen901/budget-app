import React from "react";
import PropTypes from "prop-types";
import ExpenseList from "./ExpenseList";
import {
  CategoryWrapper,
  CategoryTitle,
  CategorySpent,
  DeleteButton,
  CategoryInfoContainer,
} from "../styles/styles";

const Category = ({
  title,
  spent,
  onDelete,
  addSpending,
  expenses,
}) => {

  const handleDelete = () => {
    onDelete(title);
  };

  const handleAddSpending = (updatedExpenses, amount) => {
    addSpending(title, updatedExpenses, amount);
  };
  
  

  return (
    <CategoryWrapper>
      <CategoryInfoContainer>
        <CategoryTitle>{title}</CategoryTitle>
        <CategorySpent>Spent: ${spent}</CategorySpent>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </CategoryInfoContainer>
      <ExpenseList expenses={expenses} onSubmit={handleAddSpending} />
    </CategoryWrapper>
  );
};

Category.propTypes = {
  title: PropTypes.string.isRequired,
  spent: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  addSpending: PropTypes.func.isRequired,
  expenses: PropTypes.array.isRequired,
};

export default Category;
