import styled from "styled-components";

import BoardList from "../BoardList/BoardList";
import BoardSearch from "../BoardSearch/BoardSearch";

export default function BoradContainer() {
  return (
    <StyledBoardContainer>
      <BoardSearch />
      <BoardList />
    </StyledBoardContainer>
  );
}

const StyledBoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
