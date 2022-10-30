import Avatar from "@/components/Avatar/Avatar";

import {
  StyledAuthorInfo,
  StyledBoardItem,
  StyledBoardSummaryContent,
  StyledBoardSummaryStats,
  StyledBoardSummaryTitle,
  StyledBoardText,
  StyledSummaryContentInfo,
  StyledSummaryStat,
  StyledSummaryStats,
  StyledTag,
  StyledTags
} from "./BoardItem.style";

export default function BoardItem({ board }) {
  const {
    id,
    author,
    summary_profile_img,
    likes,
    comment_length,
    views,
    title,
    summary_description,
    tags } = board;

  return (
    <StyledBoardItem>
      <StyledBoardSummaryStats>
        <StyledSummaryStats>
          <StyledSummaryStat>
            {likes}
          </StyledSummaryStat>
          <StyledBoardText>
            likes
          </StyledBoardText>
        </StyledSummaryStats>
        <StyledSummaryStats>
          <StyledSummaryStat>
            {comment_length}
          </StyledSummaryStat>
          <StyledBoardText>
            comments
          </StyledBoardText>
        </StyledSummaryStats>
        <StyledSummaryStats>
          <StyledSummaryStat>
            {views}
          </StyledSummaryStat>
          <StyledBoardText>
            views
          </StyledBoardText>
        </StyledSummaryStats>
      </StyledBoardSummaryStats>
      <StyledBoardSummaryContent>
        <StyledBoardSummaryTitle to={`/board/${id}`} >
          {title}
        </StyledBoardSummaryTitle>
        <StyledBoardText>
          {summary_description}
        </StyledBoardText>
        <StyledSummaryContentInfo>
          <StyledTags>
            {tags.map((tag) => (
              <StyledTag key={tag.id}>
                {tag.name}
              </StyledTag>
            ))}
          </StyledTags>
          <StyledAuthorInfo>
            <div>
              <Avatar src={summary_profile_img} size={'sm'} />
            </div>
            <StyledBoardText>
              {author}
            </StyledBoardText>
          </StyledAuthorInfo>
        </StyledSummaryContentInfo>
      </StyledBoardSummaryContent >
    </StyledBoardItem >
  );
}
