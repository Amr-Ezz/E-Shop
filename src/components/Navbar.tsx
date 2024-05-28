import React from "react";
import styled from "styled-components";


const HeaderStyling = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 2px solid #eee;
`
const Logo = styled.h1`
font-size: 30px;
fonr-weight: bold;
span {
  color: #E08CFF;
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
      color: #E08CFF;

  }
}
`
const Button = styled.button`
border-style: none;
background-color: #fff;
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
border-left: 1px solid #8B8B8B;
`
const Navbar: React.FC = () => {
  return (
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
    
  )
}

export default Navbar