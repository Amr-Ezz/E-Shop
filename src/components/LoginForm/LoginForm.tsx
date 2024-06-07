import styled from "styled-components";
import { auth } from "../../../src/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.grey};
  }
`;
const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleAuth = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsRegistered(true);
      setIsLoginForm(false);
      alert("Login Successful");
    } catch (error) {
      console.error("Authentication error", error);
      alert("Login Failed");
    }
  };

  return (
    <>
      {isLoginForm && !isRegistered && (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleAuth();
          }}
        >
          <h2>Login</h2>
          <Input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <Input
            value={password}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Login</Button>
        </Form>
      )}
    </>
  );
};

export default LoginForm;
