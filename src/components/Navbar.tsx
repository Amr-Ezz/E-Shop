import React, { Suspense, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import { FlexColumn, FlexRow } from "../Utilities/StyledUtilities.styled";
import { useUser } from "../Context/UserContext";
import { FaUser } from "react-icons/fa";

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
  color: ${(props) => props.theme.colors.text} @media (max-width: 768px) {

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
  color: ${(props) => props.theme.colors.text};
  span {
    color: ${(props) => props.theme.colors.tertiary};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

interface NavProps {
  isopen: boolean;
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
        color: ${(props) => props.theme.colors.text};
        position: relative;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
      display: ${(props) => (props.isopen ? "flex" : "none")};
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
    color: ${(props) => props.theme.colors.text};
  }
`;

const ButtonDiv = styled(FlexRow)`
  width: 280px;
  justify-content: space-between;
  align-content: center;
  position: relative;
  button {
    background-color: transparent;
    color: ${(props) => props.theme.colors.text};
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
  color: ${(props) => props.theme.colors.text};
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
const WrapperButtons = styled(FlexColumn)`
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
const LabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  margin-top: 5px;
  width: 60px;
  height: 34px;
`;
const CheckBox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;
`;
const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition: 0.4s;
  box-shadow: 1px 1px 5px 0 #d84f68 inset;

  &::before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #d84f68;
    transition: 0.4s;
    box-shadow: inset 1px 1px 2px 0px #ff7ca7;
  }

  &.round {
    border-radius: 34px;

    &::before {
      border-radius: 50%;
    }
  }
`;
const StyledCheckbox = styled(CheckBox)`
  &:checked + ${Slider} {
    box-shadow: 1px 1px 5px 0 #2a9d8f inset;
  }

  &:checked + ${Slider}::before {
    transform: translateX(26px);
    background-color: #2a9d8f;
    box-shadow: inset -1px 1px 2px 0px #a3fff4;
  }
`;
const UserLoggedIn = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  span {
    font-size: 1.1rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors.text};
  }
`;
const ThemedIconUser = styled(FaUser)`
  color: ${(props) => props.theme.colors.text};
  font-size: 34px;
`;
const ThemedIconSearch = styled(FaSearch)`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
`;

// dynamic imports
const Modal = React.lazy(() => import("./Modal/Modal"));
const RegisterForm = React.lazy(() => import("./RegisterForm/RegisterForm"));
const LoginForm = React.lazy(() => import("./LoginForm/LoginForm"));
const CartModal = React.lazy(() => import("./Modal/CartModal"));
const FaBars = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaBars }))
);
const FaTimes = React.lazy(() =>
  import("react-icons/fa").then((mod) => ({ default: mod.FaTimes }))
);
///////////////////////////////////////////////////////////////////////

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
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useUser();
  const handleLogOut = async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("error logging out", error);
    }
  };

  return (
    <>
      <NavbarSpace />
      <NavbarContainer>
        <Header>
          <Logo>
            <span>Go</span> Shop
          </Logo>
          <Hamburger onClick={toggleMenu}>
            <Suspense fallback={<span>loading....</span>}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </Suspense>
          </Hamburger>
          <Nav isopen={menuOpen}>
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
                {cartModal && (
                  <Suspense fallback={<span>loading...</span>}>
                    <CartModal onClose={toggleCart} />
                  </Suspense>
                )}
              </li>
              <LabelSwitch>
                <StyledCheckbox
                  checked={theme === "light"}
                  onChange={toggleTheme}
                />
                <Slider className="round"></Slider>
              </LabelSwitch>
            </ul>
          </Nav>
          <WrapperButtons>
            <ButtonDiv>
              <ThemedIconSearch onClick={toggleSearch} />
              {user ? (
                <UserLoggedIn>
                  <ThemedIconUser />
                  <span>Hello, {user.displayName}</span>
                  <button onClick={handleLogOut}>Log Out</button>
                </UserLoggedIn>
              ) : (
                <>
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
                </>
              )}
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
          <Suspense fallback={<span>Loading Modal ....</span>}>
            <Modal show={showModal} onClose={toggleModal}>
              {isRegister ? (
                <Suspense fallback={<span>Register loading ...</span>}>
                  <RegisterForm />
                </Suspense>
              ) : (
                <Suspense fallback={<span>Login loading ...</span>}>
                  <LoginForm />
                </Suspense>
              )}
            </Modal>
          </Suspense>
        </Header>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
