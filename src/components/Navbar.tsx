import React, { Suspense, useCallback, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "../Context/ThemeContext";
import { FlexColumn, FlexRow } from "../Utilities/StyledUtilities.styled";
import { useUser } from "../Context/UserContext";
import { FaUser } from "react-icons/fa";
import { Loader } from "./Loader/Loader";
import { useLoader } from "../Context/LoaderContext";

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
  color: ${({ theme }) => theme.colors.text};
  span {
    color: ${({ theme }) => theme.colors.tertiary};
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

// interface NavProps {
//   isopen: boolean;
// }

const Nav = styled.nav.withConfig({
  shouldForwardProp: (prop) => prop !== "isopen",
})<{ isopen: boolean }>`
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
        color: ${({ theme }) => theme.colors.tertiary};
      }

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};
        position: relative;
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-direction: column;
      align-items: center;
      display: ${({ isopen }) => (isopen ? "flex" : "none")};
      background-color: ${({ theme }) => theme.colors.primary};
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
const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({theme}) => theme.colors.text};
  cursor: pointer;
  border-radius: 0.5rem;
  border-bottom: 2px solid blueviolet;
  border-right: 2px solid blueviolet;
  border-top: 2px solid ${({theme}) => theme.colors.tertiary};
  border-left: 2px solid ${({theme}) => theme.colors.secondary};
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right,
    box-shadow;
    &:hover {
    border-top: 2px solid blueviolet;
  border-left: 2px solid blueviolet;
  border-bottom: 2px solid rgb(238, 103, 238);
  border-right: 2px solid rgb(238, 103, 238);
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px;
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
const SearchInput = styled.input<{ isvisible: boolean }>`
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  opacity: ${({ isvisible }) => (isvisible ? "1" : "0")};

  visibility: ${({ isvisible }) => (isvisible ? "visible" : "hidden")};
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
  margin-top: 15px;
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
  gap: 10px;
  align-items: center;
  span {
    font-size: 1rem;
    font-weight: 200;
    color: ${(props) => props.theme.colors.text};
  }
`;
const ThemedIconUser = styled(FaUser)`
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
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

const Navbar = React.memo(() => {
  const [showModal, setShowModal] = useState(false);
  const [isRegister, setIsRegister] = useState(true);
  const [cartModal, setCartModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchVisible, setSearchVisible] = useState(false);
  const { isLoading, setIsLoading } = useLoader();

  const navigate = useNavigate();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const handleSearchForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (searchValue.trim()) {
        try {
          setIsLoading(true);
          await navigate(`/search?q=${encodeURIComponent(searchValue)}`);
          setSearchVisible(false);
        } finally {
          setIsLoading(false);
        }
      }
    },
    [searchValue, setIsLoading, navigate]
  );

  const toggleModal = useCallback(() => setShowModal(!showModal), []);
  const onClose = () => setShowModal(!showModal);
  const toggleCart = useCallback(() => {
    setCartModal(!cartModal);
    console.log("Entered");
  }, []);
  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);
  const toggleSearch = useCallback(() => setSearchVisible(!searchVisible), []);

  const { cartItemsCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { user, logOut } = useUser();
  const handleLogOut = useCallback(async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("error logging out", error);
    }
  }, [logOut, navigate]);
  const handleNavigation = useCallback(
    (path: string) => {
      navigate(path);
      setIsLoading(true);
    },
    [navigate, setIsLoading]
  );

  return (
    <>
      <NavbarSpace />
      <NavbarContainer>
        {isLoading && <Loader />}
        <Header>
          <Logo>
            <span>Go</span> Shop
          </Logo>
          <Hamburger onClick={toggleMenu}>
            <Suspense fallback={<Loader />}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </Suspense>
          </Hamburger>
          <Nav isopen={menuOpen}>
            <ul>
              <Suspense fallback={<Loader />}>
                <li>
                  <Link to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>
                <li onClick={() => handleNavigation("/pages/AboutUs")}>
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
                    <Suspense fallback={<Loader />}>
                      <CartModal onClose={toggleCart} />
                    </Suspense>
                  )}
                </li>
              </Suspense>

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
                  <span>{user.displayName}</span>
                  <Button onClick={handleLogOut}>Log Out</Button>
                </UserLoggedIn>
              ) : (
                <>
                  <Button
                    onClick={() => {
                      setIsRegister(false);
                      toggleModal();
                    }}
                  >
                    Login
                  </Button>
                  
                  <Button
                    onClick={() => {
                      setIsRegister(true);
                      toggleModal();
                    }}
                  >
                    Register
                  </Button>
                </>
              )}
            </ButtonDiv>
            {searchVisible && (
              <form onSubmit={handleSearchForm}>
                <SearchInput
                  isvisible={searchVisible}
                  onChange={handleSearchChange}
                  value={searchValue}
                  placeholder="Search..."
                  type="text"
                />
              </form>
            )}
          </WrapperButtons>
          <Suspense fallback={<Loader />}>
            <Modal show={showModal} onClose={() => setShowModal(false)}>
              {isRegister ? <RegisterForm /> : <LoginForm onSuccess={onClose} />}
            </Modal>
          </Suspense>
        </Header>
      </NavbarContainer>
    </>
  );
});

export default Navbar;
