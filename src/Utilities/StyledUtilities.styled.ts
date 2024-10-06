import styled from "styled-components";

interface FlexProps {
  justify?: string;
  align?: string;
  gap?: string;
}
interface PaddingProps {
  padding?: string;
}
interface PaddingProps {
  padding?: string;
}
interface ImageProps {
  width?: string;
  height?: string;
}
interface BackgroundColorProps {
  bgColor?: string;
}
interface ContainerProps {
  direction?: string;
  justify?: string;
  align?: string;
  gap?: string;
}

// Flexbox Utilities
export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  gap: ${({ gap }) => gap || "10px"};
`;

export const FlexRow = styled.div<FlexProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  gap: ${({ gap }) => gap || "10px"};
`;
export const FlexContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  gap: ${(props) => props.gap || "0"};
`;

// Text utility
export const Text = styled.p<TextProps>`
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || "#000"};
`;
interface TextProps {
  fontSize?: string;
  fontWeight?: number;
  color?: string;
}

// Spacing Utility
export const Padding = styled.div<PaddingProps>`
  padding: ${({ padding }) => padding || "1rem"};
`;

// Image Utility
export const FullHeightImage = styled.img<ImageProps>`
  width: ${({ width }) => width || "50%"};
  height: ${({ height }) => height || "100vh"};
  object-fit: cover;
`;

// Background Color Utility
export const BackgroundColor = styled.div<BackgroundColorProps>`
  background-color: ${({ bgColor, theme }) => bgColor || theme.colors.white};
`;

// Button Utility
export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "#000"};
  color: ${(props) => props.color || "#fff"};
  border: none;
  border-radius: ${(props) => props.borderRadius || "4px"};
  padding: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
interface ButtonProps {
  bgColor?: string;
  color?: string;
  borderRadius?: string;
}
