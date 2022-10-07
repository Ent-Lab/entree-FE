import styled from "styled-components";

export const StyledSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  gap: 20px;
  transition: background 0.2s ease-in, color 0.2s ease-in;
`;