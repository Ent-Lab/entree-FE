import styled from "styled-components";

export const StyledBoardDetailContainer = styled.div`
  width: 100%;
  max-height: 250%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.cardColor};
  gap: 20px;
  padding: 20px;
`;
