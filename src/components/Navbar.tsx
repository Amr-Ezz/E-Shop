import React from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
width: 100%;
margin: 0;
padding: 10px;
`
const HeaderStyling = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid #eee;
`
const Logo = styled.h1`
font-size: 30px;
font-weight: bold;
span {
  color: ${props => props.theme.colors.primary};
}
` 
const Nav = styled.nav`
display: flex;
justify-content: space-between;
padding: 8px 16px;

a {
  padding: 1rem;
  font-size: 20px;

  cursor: pointer;
  &:hover {
      color: ${props => props.theme.colors.primary};

  }
}
`
const Button = styled.button`
border-style: none;
background-color: ${props => props.theme.colors.white};
font-weight: bold;
font-size: 20px;
cursor: pointer;
img {
  width: 24px;
}
`
const ButtonDiv = styled.div`
display: flex;
width: 220px;
justify-content: space-between;


img {
  width: 20px;
  padding-right: 0.2rem;
  
}

`
const VerticalLine = styled.hr`
border: none;
height: 20px;
border-left: 1px solid ${props => props.theme.colors.grey};
`
const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
    <HeaderStyling>
          <Logo><span>Go</span> Shop</Logo>
          <Nav>
            <a>Home</a>
            <a>About us</a>
            <a>Services</a>
            <a>Contact</a>

          </Nav>
          <ButtonDiv>
            
          <img src="public/icons/magnifying-glass-solid.svg" alt=" Search Icon" />
          <VerticalLine />
          <img src="public/icons/user-regular.svg" alt="User img" />

          <Button>
            Login / Register
          </Button>
          </ButtonDiv>
         

    </HeaderStyling>
    </NavbarContainer>

    
  )
}

export default Navbar