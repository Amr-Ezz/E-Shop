import styled from 'styled-components';

const HeroDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
gap: 2rem;
align-items: center;
padding: 2rem;
`
const FontSection = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
h1 {
   
    margin: 0;
    line-height: 1.1;
    text-align: start;
    font-size: 96px;
    font-weight: 600;
} 
p {
    font-size: 24px;
    margin: 8px 0;
    color: #8B8B8B;
}
button {
    color: #000;
    background-color: #E08CFF;
    border-radius: 50px;
    width: 200px;
    height: 60px;
    border-style: none;
    font-size: 24px;
    margin-top: 16px;
    cursor: pointer;
    &:hover {
        background-color: white;
    }
}


`


const HeroSection = () => {
  return (
    <HeroDiv>
        <FontSection>
        
            <h1>New Summer
            Collection</h1>
<p>Shop the best clothes in the world</p>
<button>SHOP NOW</button>
            
            
        </FontSection>
        <div>
        <img src="/Rectangle 3.png" alt="Model Image" />

        </div>

    </HeroDiv>
  )
}

export default HeroSection