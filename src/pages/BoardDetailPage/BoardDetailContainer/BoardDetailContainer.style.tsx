import styled from "styled-components";

export const StyledBoardDetailContainer = styled.div`
  width: 100%;
  max-height: 200%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.cardColor};
  
  padding: 20px;
`;
