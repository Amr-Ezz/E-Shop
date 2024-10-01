import { useEffect } from "react";

interface SplitTextProps {
  text: string;
  animationDuration?: number;
  style?: React.CSSProperties;
  className?: string; 

}

const SplitText: React.FC<SplitTextProps> = ({ text, animationDuration, style, className }) => {
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
  }, [text, animationDuration]);
  return (
    <span className={className} style={{ display: "inline-block", overflow: "hidden", ...style, textAlign: "start", }}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="letter"
          style={{
            ...style,
            display: "inline-block",
            opacity: 0,
            transform: "translateY(20px)",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
