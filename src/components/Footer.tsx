import styled from "styled-components";
import { FlexColumn, FlexRow } from "../Utilities/StyledUtilities.styled";

const FooterMain = styled(FlexRow)`
  width: 100%;
  border-top: 1px solid white;
  overflow: hidden;
  background: ${(props) => props.theme.colors.quaternary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.tertiary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.primary} 100%
  );
  color: ${(props) => props.theme.colors.text};
 

  
`;

const OfferText = styled(FlexRow)`
  align-items: flex-start;
  justify-content: space-between;
  gap: 52px;
  text-align: left;

  ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    padding: 1rem;
      }
        
  `}
`;

const FooterColumn = styled(FlexColumn)`
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;


  h3 {
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;

    ${({ theme }) => `
  
      @media (max-width: ${theme.breakPoints.md}) {
font-size: 14px;
    }
        
  `}
  }

  h4 {
    color: ${(props) => props.theme.colors.text};
    font-size: 20px;
    font-weight: medium;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    font-size: 16px;
    font-weight: regular;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.tertiary};
    }

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  form {
    width: 217px;
    height: 48px;
    position: relative;

    input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 4px;
      border: none;
      padding: 12px 5px 16px;
      background-color: black;
      opacity: 80%;
      color: white;
      width: 100%;
    }

    img {
      position: absolute;
      right: 50px;
      top: 30px;
      bottom: 12px;
      cursor: pointer;

      @media (max-width: 768px) {
        right: 5px;
      }
    }
  }
`;

const MobileContainer = styled(FlexRow)`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageMobileColumn = styled.div`
  flex: 1;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

const ContentColumn = styled(FlexColumn)`
  // flex: 1;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Element = styled(FlexRow)`
  padding: 5px;
  cursor: pointer;

  img {
    border-radius: 10px;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const Footer = () => {
  return (
    <FooterMain>
      <OfferText>
        <FooterColumn>
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>
          {/* <form>
            <input placeholder="Enter Your Email" />
            <img src="/icons/icon-send.svg" alt="icon" />
          </form> */}
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
              <img src="/Qrcode 1.png" alt="QR Code" loading="lazy"/>
            </ImageMobileColumn>
            <ContentColumn>
              <Element>
                <img src="/GooglePlay.png" alt="GooglePlay" loading="lazy"/>
              </Element>
              <Element>
                <img src="/download-appstore.png" alt="App Store" loading="lazy"/>
              </Element>
            </ContentColumn>
          </MobileContainer>
        </FooterColumn>
      </OfferText>
    </FooterMain>
  );
};

export default Footer;
