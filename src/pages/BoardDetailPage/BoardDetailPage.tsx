import styled from "styled-components";

export default function BoardDetailPage() {
  return (
    <StyledBoard>
      <div>Detail</div>
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  position: relative;
  width: 80%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px 50px 50px;
`;
