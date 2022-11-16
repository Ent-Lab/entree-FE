import styled from "styled-components";

import BoardCommentDetail from "../BoardCommentDetail/BoardCommentDetail";

const comments = [
  {
    id: 1,
    user: {
      name: '하잇',
      avatar: ''
    },
    description: '리뷰!',
    createdAt: '2021-10-31'
  },
  {
    id: 2,
    user: {
      name: 'task11',
      avatar: ''
    },
    description: '리뷰 남깁니다 좋네요',
    createdAt: '2021-10-30'
  }
];

export default function BoardComments() {
  return (
    <StyledBoardComments>
      <BoardCommentDetail comments={comments} />
    </StyledBoardComments>
  );
}

const StyledBoardComments = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 20px;
`;
