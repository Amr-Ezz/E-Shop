import styled from "styled-components";
import { FlexColumn } from "../Utilities/StyledUtilities.styled";
import React, { Suspense } from "react";
import { Loader } from "./Loader/Loader";
import { Link } from "react-router-dom";
import CartModal from "./Modal/CartModal";

const FooterMain = styled(FlexColumn)`
  width: 100%;
  min-height: 250px;
  border-top: 1px solid white;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.quaternary};
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.tertiary} 0%,
    ${({ theme }) => theme.colors.secondary} 50%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  color: ${(props) => props.theme.colors.text};
`;

// const OfferText = styled(FlexRow)`
//   width: 100%;
//   min-height: 200px;
//   align-items: flex-start;
//   justify-content: space-between;
//   text-align: left;

//   ${({ theme }) => `
  
//       @media (max-width: ${theme.breakPoints.md}) {
//       display: grid;
//       grid-template-columns: repeat(2, 1fr);
//     grid-gap: 20px;
//     padding: 1rem;
//       }
//     @media (max-width: ${theme.breakPoints.sm}) {
//     display: flex;
//     flex-direction: column;
//     }
        
//   `}
// `;

// const FooterColumn = styled(FlexColumn)`
//   justify-content: flex-start;
//   align-items: flex-start;
//   gap: 15px;
//   width: 100%;
//   min-height: 150px;
//   h3 {
//     color: ${({ theme }) => theme.colors.text};
//     font-weight: bold;
//     white-space: nowrap;

//     ${({ theme }) => `
  
//       @media (max-width: ${theme.breakPoints.md}) {
// font-size: 14px;
//     }
        
//   `}
//   }

//   h4 {
//     color: ${(props) => props.theme.colors.text};
//     font-weight: medium;
//     white-space: nowrap;

//     @media (max-width: 768px) {
//       font-size: 18px;
//     }
//   }

//   p {
//     font-size: 16px;
//     cursor: pointer;
//     white-space: nowrap;

//     &:hover {
//       color: ${(props) => props.theme.colors.tertiary};
//     }

//     @media (max-width: 768px) {
//       font-size: 14px;
//     }
//   }

//   form {
//     width: 217px;
//     height: 48px;
//     position: relative;

//     input {
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       bottom: 0;
//       border-radius: 4px;
//       border: none;
//       padding: 12px 5px 16px;
//       background-color: black;
//       opacity: 80%;
//       color: white;
//       width: 100%;
//     }

//     img {
//       position: absolute;
//       right: 50px;
//       top: 30px;
//       bottom: 12px;
//       cursor: pointer;

//       @media (max-width: 768px) {
//         right: 5px;
//       }
//     }
//   }
// `;

// const MobileContainer = styled(FlexRow)`
//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const ImageMobileColumn = styled.div`
//   flex: 1;

//   img {
//     object-fit: cover;
//     width: 100%;
//     min-width: 100px;
//     min-height: 100px;
//     display: block;
//   }
// `;

// const ContentColumn = styled(FlexColumn)`
//   // flex: 1;
//   justify-content: space-between;

//   @media (max-width: 768px) {
//     align-items: center;
//   }
// `;

// const Element = styled(FlexRow)`
//   padding: 5px;
//   cursor: pointer;

//   img {
//     width: 100%;
//     min-height: 50px;
//     border-radius: 10px;
//     max-width: 100%;
//   }

//   @media (max-width: 768px) {
//     margin-top: 10px;
//   }
// `;
const FooterRow = styled.div`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    list-style: none;
    padding: 1rem;
    a {
      color: inherit;
      text-decoration: none;
      padding: 8px 15px;
      border-radius: 20px;
      transition: background-color 0.2s ease, color 0.2s ease,
        transform 0.2s ease;
      display: inline-block;
      border: 1px solid transparent;
      &:hover {
        background-color: ${({ theme }) => theme.colors.tertiary};
        transform: translateY(-2px);
      }
    }
  }
`;
const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  font-size: 0.9em;
  opacity: 0.7;
`;

const Footer = React.memo(() => {
  return (
    <FooterMain>
      <h1>Quick Links</h1>
      <FooterRow>
        <ul>
          <Suspense fallback={<Loader />}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pages/AboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/pages/Services">Services</Link>
            </li>
            <li>
              <Link to="/pages/ContactUs">Contact Us</Link>
            </li>
            {/* <li>
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
                         </li> */}
          </Suspense>
        </ul>
        <FooterBottom>
          <p>&copy; 2024 Go Shop. All rights reserved.</p>
        </FooterBottom>
      </FooterRow>

      {/* <OfferText>
        <FooterColumn>
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
         
        </FooterColumn>
        <FooterColumn>
          <h3>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </FooterColumn>
        <FooterColumn>
          <h3>Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </FooterColumn>
        <FooterColumn>
          <h3>Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </FooterColumn>
        <FooterColumn>
          <h3>Download App</h3>
          <p>Save $3 with App New User Only</p>
          <MobileContainer>
            <ImageMobileColumn>
              <img
                src="/Qrcode 1.png"
                alt="QR Code"
                loading="lazy"
                width="100"
                height="100"
              />
            </ImageMobileColumn>
            <ContentColumn>
              <Element>
                <img
                  src="/GooglePlay.png"
                  alt="GooglePlay"
                  loading="lazy"
                  width={135}
                  height={40}
                />
              </Element>
              <Element>
                <img
                  src="/download-appstore.png"
                  alt="App Store"
                  loading="lazy"
                  width={135}
                  height={40}
                />
              </Element>
            </ContentColumn>
          </MobileContainer>
        </FooterColumn>
      </OfferText> */}
    </FooterMain>
  );
});

export default Footer;
