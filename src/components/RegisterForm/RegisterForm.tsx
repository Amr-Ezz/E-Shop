import styled from "styled-components";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
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
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-weight: 600;
  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
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
const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const handleAuth = async () => {
    if (!email || !password) {
      alert("Email and password fields cannot be empty");
      return;
    }
    try {
      const userCredientials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredientials.user, { displayName: userName });
      setIsRegistered(true);
      alert("Register Successfull");
    } catch (error) {
      console.error("Authentication error", error);
    }
  };
  return (
    <div>
      {!isRegistered ? (
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleAuth();
          }}
        >
          <h2>Register</h2>
          <Input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <Button type="submit">Register</Button>
        </Form>
      ) : (
        <h2>Welcome, {userName}!</h2>
      )}
    </div>
  );
};

export default RegisterForm;
