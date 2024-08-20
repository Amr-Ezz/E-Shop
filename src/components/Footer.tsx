import styled from "styled-components";

const FooterMain = styled.div`
  width: 100%;
  padding: 2rem 1rem; 
  border-top: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto; 
    padding: 2rem 0.5rem;
  }
`;

const OfferText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 52px;
  text-align: left;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: flex-start;
    gap: 30px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;

  h3 {
    color: white;
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 20px; 
    }
  }

  h4 {
    color: white;
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
      color: white;
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
      right: 10px;
      top: 10px;
      bottom: 12px;
      cursor: pointer;

      @media (max-width: 768px) {
        right: 5px; 
      }
    }
  }
`;

const MobileContainer = styled.div`
  display: flex;
  flex-direction: row;

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

const ContentColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const Element = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
          <form>
            <input placeholder="Enter Your Email" />
            <img src="/icons/icon-send.svg" alt="icon" />
          </form>
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
              <img src="/Qrcode 1.png" alt="QR Code" />
            </ImageMobileColumn>
            <ContentColumn>
              <Element>
                <img src="/GooglePlay.png" alt="GooglePlay" />
              </Element>
              <Element>
                <img src="/download-appstore.png" alt="App Store" />
              </Element>
            </ContentColumn>
          </MobileContainer>
        </FooterColumn>
      </OfferText>
    </FooterMain>
  );
};

export default Footer;
