import styled from "styled-components";

const tags = [
  'react', 'html'
];

export default function BoardDetailTags() {
  return (
    <StyledBoardDetailTags>
      {tags.map((tag) => (
        <StyledBoardDetailTag>{tag}</StyledBoardDetailTag>
      ))}
    </StyledBoardDetailTags>
  );
}

const StyledBoardDetailTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledBoardDetailTag = styled.div`
  display: flex;
  padding: 4px 8px;
  color: white;
  background-color: #6565ff;
  border-radius: 10px;
`;
