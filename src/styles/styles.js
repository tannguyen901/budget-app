import styled from 'styled-components';

export const Container = styled.div`
  background-color: #36393f;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #b9bbbe;
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;
export const Title = styled.h1`
  margin: 0 auto;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
`;

export const Input = styled.input`
width: 25%;
padding: 8px 10px;
margin: 8px 0;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 4px;
outline: none;
&:focus {
  border: 1px solid #4caf50;
}
`;

export const Select = styled.select`
  border: 1px solid #2f3136;
  border-radius: 3px;
  background-color: #2f3136;
  color: #b9bbbe;
  padding: 0.5rem;
`;

export const Button = styled.button`
  background-color: #7289da;
  color: #fff;
  border: none;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #677bc4;
  }
  margin: 10px;
  background-color: ${(props) => (props.active ? "#4BC0C0" : "#ccc")};
`;

export const CategoryContainer = styled.div`
  background-color: #2f3136;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-left: 0.8rem;
`;

export const ExpensesTitle = styled.h3`
  color: #fff; // Update the text color
  margin-bottom: 1rem;
`;

export const CategoryTitle = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;

export const CategorySpent = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #fff; // Update the text color
`;


export const FormButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
`;

export const ListContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ListItem = styled.div`
  padding: 5px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    border-bottom: none;
  }
`;

export const ActiveButton = styled(Button)`
  background-color: #4BC0C0;
`;

export const ExpensesContainer = styled.div`
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #ccc;
  background-color: #36393f; // Update the background color
  padding: 8px;
  margin-top: 8px;
`;

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #2f3136;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  width: 100%;
  max-width: 750px; // Add max-width for consistent sizing
  justify-content: center; // Center align the content
`;



export const DeleteButton = styled.button`
  background-color: #f44336;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 5px 2px;
  cursor: pointer;
  border-radius: 5px;
`;
export const CategoryInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 50px; // Add padding to separate CategoryInfoContainer and ExpenseList
`;
