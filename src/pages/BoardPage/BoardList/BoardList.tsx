import styled from "styled-components";

import BoardItem from "../BoardItem/BoardItem";

const boardList = [
  {
    id: 1,
    author: 'task11',
    summary_profile_img: '',
    likes: 5,
    comment_length: 6,
    views: 100,
    title: 'Lorem ipsum dolor sit',
    summary_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis dolorem, cum sit alias tempora amet voluptate maiores aperiam voluptates nisi delectus quas,',
    tags: [
      { id: 1, name: 'react' },
      { id: 3, name: 'css' },
    ]
  },
  {
    id: 2,
    author: 'task12',
    summary_profile_img: '',
    likes: 6,
    comment_length: 7,
    views: 130,
    title: 'Lorem ipsum dolor sit22',
    summary_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    tags: [
      { id: 1, name: 'react' },
      { id: 3, name: 'css' },
      { id: 4, name: 'asdasd' }
    ]
  },
  {
    id: 3,
    author: 'task1222',
    summary_profile_img: '',
    likes: 3,
    comment_length: 10,
    views: 200,
    title: 'Lorem ipsum dolor sit22666666',
    summary_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis dolorem, cum sit alias tempora amet voluptate maiores ',
    tags: [
      { id: 1, name: 'react' },
      { id: 2, name: 'html' },
    ]
  },
  {
    id: 4,
    author: 'task1222',
    likes: 3,
    comment_length: 10,
    views: 200,
    title: 'Lorem ipsum dolor sit22666666',
    summary_description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita reiciendis dolorem, cum sit alias tempora amet voluptate maiores ',
    tags: [
      { id: 1, name: 'react' },
      { id: 2, name: 'html' },
      { id: 3, name: 'css' },
      { id: 4, name: 'asdasd' }
    ]
  }
];

export default function BoardList() {
  return (
    <StyledBoardList>
      {boardList.map((board) => (
        <BoardItem key={board.id} board={board} />
      ))}
    </StyledBoardList>
  );
}

const StyledBoardList = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
