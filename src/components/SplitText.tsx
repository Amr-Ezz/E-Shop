import { useEffect } from "react";

interface SplitTextProps {
  words?: string[];
  animationDuration?: number;
  className?: string;
}

const SplitText: React.FC<SplitTextProps> = ({
  words,
  animationDuration = 1000,
  className,
}) => {
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");
    letters.forEach((letter, index) => {
      letter.animate(
        [
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: animationDuration,
          delay: index * 50,
          fill: "forwards",
        }
      );
    });
  }, [animationDuration]);

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
            <span
              key={`${wordIndex}-${charIndex}`}
              className="letter"
              style={{
                display: "inline-block",
                opacity: 0,
                transform: "translateY(20px)",
              }}
            >
              {char}
            </span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

export default SplitText;
