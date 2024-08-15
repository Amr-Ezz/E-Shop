import styled from "styled-components";

const FooterMain = styled.div`
width: 100%;
height: 312px;
border-top: 1px solid white;
display: flex;
align-items: center;
justify-content: center;

// background-image: url('/pexels-godisable1.png');
// background-size: cover; /* This makes the image cover the entire div */
// background-repeat: no-repeat; /* Prevents the image from repeating */
// background-position: center; /* Centers the image within the div */
);
`;
const OfferText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 52px;
  text-align: left;
  
  // p:nth-child(1) {
  //   width: 274px;
  //   font-weight: 600;
  //   font-size: 36px;
  //   line-height: 54px;
  //   letter-spacing: -2%;
  //   color: ${(props) => props.theme.colors.white};
  // }
  // p:nth-child(2) {
  //   width: 502px;
  //   font-weight: 600;
  //   font-size: 96px;
  //   line-height: 96px;
  //   letter-spacing: -2%;
  //   color: ${(props) => props.theme.colors.white};
  // }
  // p:nth-child(3) {
  //   width: 214px;
  //   height: 44px;
  //   padding-top: 10px;
  //   padding-bottom: 10px;
  //   border-width: 0px 0px 1px 0px;
  //   border-style: solid;
  //   text-align: center;
  //   border-color: ${(props) => props.theme.colors.white};
  //   font-weight: 500;
  //   font-size: 24px;
  //   line-height: 24px;
  //   color: ${(props) => props.theme.colors.white};
  //   letter-spacing: -2%;
  //   cursor: pointer;
  // }
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
};
h4 {
color: white;
font-size: 20px;
font-weight: medium;
};
p {
font-size: 16px;
font-weight: regular;
cursor: pointer;
&:hover {
color: white;
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
}
img {
position: absolute;
right: 42px;
top: 10px;
bottom: 12px;
cursor: pointer;
}

}
`
const MobileContainer = styled.div`
display: flex;
flex-direction: row;

`
const ImageMobileColumn = styled.div`
flex: 1;
img {
object-fit: cover;
}`
const ContentColumn = styled.div`
flex: 1;
display: flex;
flex-direction: column;
`
const Element = styled.div`
flex: 1; /* Each element takes up half of the content column */
display: flex;
align-items: center;
justify-content: center;
padding-left: 10px;
cursor: pointer;
img {
border-radius: 10px;
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
        <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p>
        exclusive@gmail.com
        </p>
        <p>
        +88015-88888-9999
        </p>
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
            <img src="/download-appstore.png" alt="GooglePlay" />

            </Element>
         

          </ContentColumn>
        </MobileContainer>

       </FooterColumn>
      </OfferText>
    </FooterMain>
  );
};

export default Footer;
