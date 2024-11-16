import styled from "styled-components";
export const ResultsDiv = styled.div`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  background: ${(props) => props.theme.colors.secondary};
  background: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.primary} 0%,
    ${(props) => props.theme.colors.secondary} 50%,
    ${(props) => props.theme.colors.tertiary} 100%
  );
 
`;
