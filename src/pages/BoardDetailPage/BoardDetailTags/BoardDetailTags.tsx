import {
  StyledBoardDetailTag,
  StyledBoardDetailTags
} from "./BoardDetailTags.style";

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
