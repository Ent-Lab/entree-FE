import { useParams } from "react-router-dom";

import styled from "styled-components";

import BoardDetailContainer from "./BoardDetailContainer/BoardDetailContainer";

export default function BoardDetailPage() {
  const { boardId } = useParams();

  return (
    <StyledBoard>
      <BoardDetailContainer boardId={boardId} />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px 50px 50px;
`;
