import {
  CheckBox,
  ContactContainer,
  ContactForm,
  ContactInput,
  GlassContainer,
  ImageHolder,
  MessageInput,
  SubmitButton,
} from "./ContactUs.styled";

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
        <img src="/FashionBackground.jpg" alt="models" loading="lazy"/>
      </ImageHolder>
    </ContactContainer>
  );
};

export default ContactUs;
