import styled from "styled-components";
import { auth } from "../../../src/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  z-index: 1;
`;

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s ease;
  font-weight: 600;

  &:hover {
    background-color: ${(props) => props.theme.colors.white};
    color: ${(props) => props.theme.colors.grey};
  }
`;

const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

interface LoginFormTypes {
  onSuccess: () => void;
}

const LoginForm: React.FC<LoginFormTypes> = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");

  const validateForm = () => {
    if (!email || !password) {
      setError("Email and password are required.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const handleAuth = async () => {
    if (!validateForm()) return;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsRegistered(true);
      setIsLoginForm(false);
      setError("");
      onSuccess();
      alert("Login Successful");
    } catch (err: any) {
      console.error("Authentication error", err);
      let message = "Login failed. Please try again.";
      switch (err.code) {
        case "auth/user-not-found":
          message = "No account found with this email.";
          break;
        case "auth/wrong-password":
          message = "Incorrect password.";
          break;
        case "auth/invalid-email":
          message = "Invalid email format.";
          break;
        case "auth/too-many-requests":
          message = "Too many failed attempts. Please try again later.";
          break;
      }
      setError(message);
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
          {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}
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
