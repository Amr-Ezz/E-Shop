import styled from "styled-components";


const ContactContainer = styled.div`
display: flex;
justify-content: space-around;
background: rgb(255,205,241);
background: radial-gradient(circle, rgba(255,205,241,0.3337710084033614) 0%, rgba(224,140,255,1) 100%);`

const ContactForm = styled.form`
display: flex;
flex-direction: column;

h3 {
font-size: 56px;
font-weight: 900;
color: white;
}
`; 
const ContactInput = styled.input`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`
const ImageHolder = styled.div`

img {
  object-fit: cover;
   
width: 328px;
height: 324px;

}

`
const ContactUs = () => {
  return (
    <ContactContainer>
        <ContactForm>
            <h3>
                Contact Us
            </h3>
<ContactInput placeholder="First Name" />
<ContactInput placeholder="Last Name" />
<ContactInput placeholder="Message" />



        </ContactForm>
        <ImageHolder>
<img src="/Rectangle 50.png" alt="models" />
        </ImageHolder>
    </ContactContainer>
  )
}

export default ContactUs