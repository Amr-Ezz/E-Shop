import styled from "styled-components";

const FooterMain = styled.div`
width: 1340px;
height: 512px;
background-image: url('/pexels-godisable1.png');
background-size: cover; /* This makes the image cover the entire div */
background-repeat: no-repeat; /* Prevents the image from repeating */
background-position: center; /* Centers the image within the div */
);
`;
const OfferText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32px;
  width: 392px;
  height: 234px;
  padding-top: 140px;
  padding-left: 128px;
  text-align: start;
  
  p:nth-child(1) {
    width: 274px;
    font-weight: 600;
    font-size: 36px;
    line-height: 54px;
    letter-spacing: -2%;
    color: ${(props) => props.theme.colors.white};
  }
  p:nth-child(2) {
    width: 502px;
    font-weight: 600;
    font-size: 96px;
    line-height: 96px;
    letter-spacing: -2%;
    color: ${(props) => props.theme.colors.white};
  }
  p:nth-child(3) {
    width: 214px;
    height: 44px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-width: 0px 0px 1px 0px;
    border-style: solid;
    text-align: center;
    border-color: ${(props) => props.theme.colors.white};
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    color: ${(props) => props.theme.colors.white};
    letter-spacing: -2%;
    cursor: pointer;
  }
`;
const Footer = () => {
  return (
    <FooterMain>
      <OfferText>
        <p>Limited Edition</p>
        <p>50% OFF</p>
        <p>see all collection</p>
      </OfferText>
    </FooterMain>
  );
};

export default Footer;
