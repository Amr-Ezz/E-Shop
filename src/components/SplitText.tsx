import styled, { keyframes } from "styled-components";

interface SplitTextProps {
  words?: string[];
  className?: string;
  animationDuration: number;
}
const fadeInUp = keyframes`
from {
opacity: 0;
    transform: translateY(20px);

} to {
 opacity: 1;
 transform: translateY(0)
 }`;
 const Letter = styled.span<{delay: number}>`
  display: inline-block;
  opacity: 0;
  animation: ${fadeInUp} 0.8s ease-out forwards;
  animation-delay: ${(props) => props.delay}ms;
 `


const SplitText: React.FC<SplitTextProps> = ({ words, className }) => {

  return (
    <span className={className}>
      {words?.map((word, wordIndex) => (
        <span
          key={wordIndex}
          style={{
            display: "inline-block",
            marginRight: "0.5rem",
          }}
        >
          {word.split("").map((char, charIndex) => (
            <Letter
              key={`${wordIndex}-${charIndex}`}
              className="letter"
              style={{
                display: "inline-block",
                opacity: 0,
                transform: "translateY(20px)",
              }}
              delay={charIndex * 50}
            >
              {char}
            </Letter>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

export default SplitText;
