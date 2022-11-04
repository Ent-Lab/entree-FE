import styled from "styled-components";

export const StyledSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-height: 100%;
  margin-top: 70px;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  gap: 20px;
  transition: background 0.2s ease-in, color 0.2s ease-in;
`;