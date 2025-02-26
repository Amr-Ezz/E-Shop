import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

// Glitch animation effect
const glitch = keyframes`
  0% { text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff; }
  50% { text-shadow: -2px -2px #ff00ff, 2px 2px #00ffff; }
  100% { text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff; }
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: #0d0d0d;
  color: #fff;
`;

const ErrorText = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  animation: ${glitch} 0.8s infinite alternate;
  color: #ff0000;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

const Button = styled(Link)`
  padding: 12px 24px;
  font-size: 1.2rem;
  color: #fff;
  background: linear-gradient(90deg, #ff00ff, #00ffff);
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorText>404</ErrorText>
      <Message>Oops! Looks like you're lost in cyberspace. 🚀</Message>
      <Button to="/">Go Home</Button>
    </ErrorContainer>
  );
};

export default ErrorPage;
