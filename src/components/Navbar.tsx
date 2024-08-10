import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal/Modal";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import { Link } from "react-router-dom";

const NavbarContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0;
  max-width: 100vw;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;
  border-bottom: 2px solid #eee;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;

  span {
    color: ${(props) => props.theme.colors.white};
  }
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      padding: 1rem;
      font-size: 20px;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.colors.white};
      }

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  width: 220px;
  justify-content: space-between;

  img {
    width: 20px;
    padding-right: 0.2rem;
  }
`;

const Button = styled.button`
  background-color: transparent;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  border: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.white};
  }
`;

const VerticalLine = styled.hr`
  border: none;
  height: 20px;
  border-left: 1px solid ${(props) => props.theme.colors.grey};
`;

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(true);

  const toggleModal = () => setShowModal(!showModal);

  return (
    <NavbarContainer>
      <Header>
        <Logo>
          <span>Go</span> Shop
        </Logo>
        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>About us</li>
            <li>
              <Link to="/pages/Services">Services</Link>
            </li>
            <li>
              <Link to="/pages/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </Nav>
        <ButtonDiv>
          <img src="/icons/magnifying-glass-solid.svg" alt="Search Icon" />
          <VerticalLine />
          <img src="/icons/user-regular.svg" alt="User Icon" />
          <Button
            onClick={() => {
              setIsRegister(false);
              toggleModal();
            }}
          >
            Login
          </Button>
          /
          <Button
            onClick={() => {
              setIsRegister(true);
              toggleModal();
            }}
          >
            Register
          </Button>
        </ButtonDiv>
        <Modal show={showModal} onClose={toggleModal}>
          {isRegister ? <RegisterForm /> : <LoginForm />}
        </Modal>
      </Header>
    </NavbarContainer>
  );
};

export default Navbar;
