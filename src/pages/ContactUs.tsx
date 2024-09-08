import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  z-index: 0;
  color: ${props => props.theme.colors.text};
   background: ${(props) => props.theme.colors.primary};
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 100%
  );

  // background: rgb(255,205,241);
  // background: radial-gradient(circle, rgba(255,205,241,0.3337710084033614) 0%, rgba(224,140,255,1) 100%);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 56px;
    font-weight: 900;
    color: ${props => props.theme.colors.text};
    text-align: left;
  }
  p {
    font-weight: 600;
    text-align: left;
  }
`;
const ContactInput = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: 60%;
`;
const MessageInput = styled.textarea`
  margin: 0.5rem 0;
  padding: 1rem;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  opacity: 60%;
`;
const ImageHolder = styled.div`
  display: flex;
  align-items: center;
  img {
    object-fit: cover;
    object-position: 100% 50%;
    border-radius: 8px;
    width: 428px;
    height: 494px;
  }
`;
const CheckBox = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 500;
`;
const GlassContainer = styled.div`
  width: fit-content;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent white */
  border-radius: 10px;
  backdrop-filter: blur(10px); /* Blur effect */
  box-shadow: 0 4px 20px rgba(255, 0, 255, 0.3),
    /* Pink shadow */ 0 4px 30px rgba(128, 0, 255, 0.2); /* Purple shadow */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Optional border */
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 6px 30px rgba(255, 0, 255, 0.4),
      0 6px 40px rgba(128, 0, 255, 0.3);
  }
`;
const SubmitButton = styled.button`
  width: 106px;
  height: 23px;
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: none;
  padding: 15px 32px;
  opacity: 90%;
  transition: all 0.3s;
  font-weight: 800;
  font-size: 20px;
  cursor: pointer;
  color: white;
  
  background: rgb(34,193,195);
background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(45,253,121,1) 100%);
  &:hover {
    color: white;
    background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
// background: rgb(45,253,121);
// background: linear-gradient(0deg, rgba(45,253,121,1) 0%, rgba(34,193,195,1) 100%);  }
`;

const ContactUs = () => {
  return (
    <ContactContainer>
      <GlassContainer>
        <ContactForm>
          <h3>Contact Us</h3>
          <p>if you need some help or any other questions, feel free to ask.</p>

          <ContactInput placeholder="First Name" />
          <ContactInput placeholder="Phone Number" />
          <MessageInput placeholder="Message" />
          <CheckBox>
            <input type="checkbox" />
            <label>I Agree With The Primary Policy</label>
          </CheckBox>
          <SubmitButton>Submit</SubmitButton>
        </ContactForm>
      </GlassContainer>

      <ImageHolder>
        <img src="/FashionBackground.jpg" alt="models" />
      </ImageHolder>
    </ContactContainer>
  );
};

export default ContactUs;
