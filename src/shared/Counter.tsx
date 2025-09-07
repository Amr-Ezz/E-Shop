import styled from "styled-components";

export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const CounterButton = styled.button`
  background-color: ${props => props.theme.colors.secondary};
  border: none;
  border-radius: 8px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  width: 32px;
  height: 32px;
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }
`;

export const CounterText = styled.p`
  margin: 0 16px;
  font-size: 1.2rem;

  @media (max-width: 480px) {
    font-size: 1rem;
    margin: 0 12px;
  }
`;
