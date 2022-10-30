import styled from "styled-components";
import BoardComments from "../BoardComments/BoardComments";
import BoardContents from "../BoardContents/BoardContents";

const boardDetail = {
  id: 1,
  author: 'task11',
  profile_img: '',
  likes: 5,
  comment_length: 6,
  views: 100,
  title: 'Lorem ipsum dolor sit',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis dolorem, cum sit alias tempora amet voluptate maiores aperiam voluptates nisi delectus quas, Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis dolorem, cum sit alias tempora amet voluptate maiores aperiam voluptates nisi delectus quas, Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis dolorem, cum sit alias tempora amet voluptate maiores aperiam voluptates nisi delectus quas,',
  comments: [
    {
      id: 1,
      username: 'aaa',
      description: '리뷰!'
    },
    {
      id: 2,
      username: 'aaa@@@@',
      description: '리뷰 남깁니다 좋네요'
    }
  ]
};

export default function BoardDetailContainer({ boardId }) {
  console.log(boardId);

  return (
    <StyledBoardDetailContainer>
      <BoardContents />
      <BoardComments />
    </StyledBoardDetailContainer>
  );
}
const StyledBoardDetailContainer = styled.div`
  width: 100%;
  max-height: 200%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(props) => props.theme.cardColor};
  
  padding: 20px;
`;
