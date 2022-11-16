import styled from "styled-components";

export const StyledAuthForm = styled.div`
  width: 250px;
  height: 400px;
  display: flex;
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: 768px) {
    width: 350px;
    height: 400px;
  }

  @media only screen and (min-width: 1024px) {
    width: 400px;
    height: 450px;
  }
`;
