import React, { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal/Modal";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";

const NavbarContainer = styled.div`
  width: 1340px;
  margin: 0;
  padding: 10px;
`;
const HeaderStyling = styled.header`
  display: flex;
  flex-direction: row;
  padding-left: 4rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #eee;
`;
const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8px 16px;

  a {
    padding: 1rem;
    font-size: 20px;
    cursor: pointer;
    transition:  0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
const Button = styled.button`
  border-style: none;
  background-color: ${(props) => props.theme.colors.white};
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
  img {
    width: 24px;
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
const VerticalLine = styled.hr`
  border: none;
  height: 20px;
  border-left: 1px solid ${(props) => props.theme.colors.grey};
`;
const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [IsRegister, setIsRegister] = useState(true);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <NavbarContainer>
      <HeaderStyling>
        <Logo>
          <span>Go</span> Shop
        </Logo>
        <Nav>
          <a>Home</a>
          <a>About us</a>
          <a>Services</a>
          <a>Contact</a>
        </Nav>
        <ButtonDiv>
          <img
            src="/icons/magnifying-glass-solid.svg"
            alt=" Search Icon"
          />
          <VerticalLine />
          <img src="/icons/user-regular.svg" alt="User img" />
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
          {IsRegister ? <RegisterForm /> : <LoginForm />}
        </Modal>
      </HeaderStyling>
    </NavbarContainer>
  );
};

export default Navbar;
