import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal/Modal";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import CartModal from "./Modal/CartModal";
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarContainer = styled.div`
  width: 100%;
  padding: 10px;
  margin: 0;
  max-width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.primary};
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

const NavbarSpace = styled.div`
  height: 60px;

  @media (max-width: 768px) {
    height: 50px;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4rem;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;

  span {
    color: ${(props) => props.theme.colors.tertiary};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

interface NavProps {
  isOpen: boolean;
}

const Nav = styled.nav<NavProps>`
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
        color: ${(props) => props.theme.colors.tertiary};
      }

      a {
        text-decoration: none;
        color: inherit;
        position: relative;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
      display: ${(props) => (props.isOpen ? "flex" : "none")};
      background-color: ${(props) => props.theme.colors.primary};
      position: absolute;
      top: 50px;
      left: 0;
      right: 0;
      padding: 1rem 0;
    }
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  svg {
    font-size: 24px;
    color: ${(props) => props.theme.colors.white};
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 220px;
  justify-content: space-between;
  align-content: center;
  position: relative;
  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors.white};
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    border: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${(props) => props.theme.colors.tertiary};
    }
  }

  img {
    width: 20px;
    padding-right: 0.2rem;

    @media (max-width: 768px) {
      width: 18px;
    }

    @media (max-width: 480px) {
      width: 16px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const CartCount = styled.div`
  position: absolute;
  top: -10px;
  right: -20px;
  background-color: purple;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;

  @media (max-width: 768px) {
    top: -8px;
    right: -16px;
    font-size: 10px;
  }

  @media (max-width: 480px) {
    top: -6px;
    right: -14px;
    font-size: 8px;
  }
`;
const SearchInput = styled.input<{ isVisible: boolean }>`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};


  @media (max-width: 768px) {
    width: 150px;
  }
`;
const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  form {
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    margin: 0;
    padding: 0;
  }
`;

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [cartModal, setCartModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);

  const navigate = useNavigate();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const handleSearchForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchValue)}`);
      setSearchVisible(false);
    }
  };

  const toggleModal = () => setShowModal(!showModal);
  const toggleCart = () => {
    setCartModal(!cartModal);
    console.log("Entered");
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setSearchVisible(!searchVisible);

  const { cartItemsCount } = useCart();

  return (
    <>
      <NavbarSpace />
      <NavbarContainer>
        <Header>
          <Logo>
            <span>Go</span> Shop
          </Logo>
          <Hamburger onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </Hamburger>
          <Nav isOpen={menuOpen}>
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pages/AboutUs" onClick={toggleMenu}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/pages/Services" onClick={toggleMenu}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pages/ContactUs" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
              <li>
                <a onClick={toggleCart}>
                  Cart{" "}
                  {cartItemsCount > 0 && (
                    <CartCount>{cartItemsCount}</CartCount>
                  )}
                </a>
                {cartModal && <CartModal onClose={toggleCart} />}
              </li>
            </ul>
          </Nav>
          <WrapperButtons>
            <ButtonDiv>
              <img
                src="/icons/magnifying-glass-solid.svg"
                alt="Search Icon"
                onClick={toggleSearch}
              />
              <img src="/icons/user-regular.svg" alt="User Icon" />
              <button
                onClick={() => {
                  setIsRegister(false);
                  toggleModal();
                }}
              >
                Login
              </button>
              /
              <button
                onClick={() => {
                  setIsRegister(true);
                  toggleModal();
                }}
              >
                Register
              </button>
            </ButtonDiv>
            {searchVisible && (
              <form onSubmit={handleSearchForm}>
                <SearchInput
                  isVisible={searchVisible}
                  onChange={handleSearchChange}
                  value={searchValue}
                  placeholder="Search..."
                  type="text"
                />
              </form>
            )}
          </WrapperButtons>

          <Modal show={showModal} onClose={toggleModal}>
            {isRegister ? <RegisterForm /> : <LoginForm />}
          </Modal>
        </Header>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
