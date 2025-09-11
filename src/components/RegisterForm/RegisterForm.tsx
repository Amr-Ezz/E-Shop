import styled from "styled-components";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button<{ disabled?: boolean }>`
  margin-top: 1rem;
  padding: 0.5rem;
  border: none;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.grey : theme.colors.primary};
  color: black;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
  font-weight: 600;
  &:hover {
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.grey : theme.colors.secondary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.grey};
  }
`;
const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;

const SuccessMsg = styled.p`
  color: green;
  font-size: 1rem;
  font-weight: bold;
`;

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { setPhoneNumber } = useUser();

  const validateForm = () => {
    if (!userName || !email || !password || !phone) {
      return "All fields are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    if (password.length < 6) {
      return "Password must be at least 6 characters long.";
    }
    if (!/^\d{10,15}$/.test(phone)) {
      return "Phone number must contain 10–15 digits only.";
    }
    return null;
  };

  const handleAuth = async () => {
    setErrorMsg(null);
    const validationError = validateForm();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    try {
      setLoading(true);
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredentials.user, { displayName: userName });

      setPhoneNumber(phone);
      setIsRegistered(true);
    } catch (error: any) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMsg("This email is already registered.");
          break;
        case "auth/invalid-email":
          setErrorMsg("Invalid email format.");
          break;
        case "auth/weak-password":
          setErrorMsg("Password is too weak.");
          break;
        default:
          setErrorMsg("Something went wrong. Please try again.");
          break;
      }
    } finally {
      setLoading(false);
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
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="text"
            placeholder="Phone Number"
          />

          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
          <Button type="submit" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </Button>
        </Form>
      ) : (
        <SuccessMsg>Welcome, {userName}! Registration successful 🎉</SuccessMsg>
      )}
    </div>
  );
};

export default RegisterForm;
