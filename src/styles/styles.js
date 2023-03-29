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

export const Form = styled.form`
  display: flex;
  gap: 1rem;
`;

export const Input = styled.input`
  border: 1px solid #2f3136;
  border-radius: 3px;
  background-color: #2f3136;
  color: #b9bbbe;
  padding: 0.5rem;
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
`;

export const CategoryContainer = styled.div`
  background-color: #2f3136;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
`;

export const CategoryTitle = styled.h3`
  color: #fff;
  margin-bottom: 1rem;
`;

