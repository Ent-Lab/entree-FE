import {
  StyledBoardDetailTag,
  StyledBoardDetailTags
} from "./BoardDetailTags.style";

const tags = [
  { id: 1, name: 'react' },
  { id: 3, name: 'css' },
];

export default function BoardDetailTags() {
  return (
    <StyledBoardDetailTags>
      {tags.map((tag) => (
        <StyledBoardDetailTag key={tag.id}>{tag.name}</StyledBoardDetailTag>
      ))}
    </StyledBoardDetailTags>
  );
}
