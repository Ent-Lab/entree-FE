import styled from "styled-components";

const comments = [
  {
    id: 1,
    username: 'aaa',
    description: '리뷰!',
  },
  {
    id: 2,
    username: 'aaa@@@@',
    description: '리뷰 남깁니다 좋네요',
  }
];

export default function BoardComments() {
  return (
    <StyledBoardComments>BoardComments</StyledBoardComments>
  );
}

const StyledBoardComments = styled.div`
  width: 100%;
  min-height: 100px;
`;
