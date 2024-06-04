import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
margin-top: 1rem;
padding: 0.5rem;
border: none;
background-color: #007bff;
color: white;
border-radius: 5px;
cursor: pointer 
&:hover {
    background-color: #0056b3;
}

`;
const Input = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const RegisterForm = () => {
  return (
    <Form>
      <h2>Register</h2>
      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
