import MarkdownRenderer from "@/components/MarkdownRenderer/MarkdownRenderer";
import Avatar from "@/components/Avatar/Avatar";
import BoardDetailTags from "../BoardDetailTags/BoardDetailTags";

import {
  StyledAutorInfo,
  StyledBoardContents,
  StyledBoardFooter,
  StyledBoardHeader,
  StyledBoardMain,
  StyledBoardStats,
  StyledBoardTitle,
  StyledCommentIcon,
  StyledLike,
  StyledLikeText,
  StyledLikeWrapper,
  StyledStatWrapper,
  StyledTextStat
} from "./BoardContents.style";

const boardDetail = {
  id: 1,
  author: 'task11',
  profile_img: '',
  likes: 5,
  comment_length: 6,
  views: 100,
  title: 'Lorem ipsum dolor sit',
  description: `
  # Lorem
  **ipsum**

  \`\`\`javascript
  const markdown = 'markDown';
  \`\`\`

  *기울기*

  -zz
  **ipsum**

  \`\`\`javascript
  const markdown = 'markDown';
  \`\`\`

  *기울기*

  -zz
  `,
  tags: [
    'react', 'html'
  ],
  createdAt: '2021-10-12',
  updatedAt: '2021-10-13',
};

export default function BoardContents() {
  return (
    <StyledBoardContents>
      <StyledBoardHeader>
        <StyledBoardTitle>
          {boardDetail.title}
        </StyledBoardTitle>
        <StyledBoardStats>
          <StyledStatWrapper>
            <StyledAutorInfo>
              <div>
                <Avatar src={boardDetail.profile_img} size={'sm'} />
              </div>
              <StyledTextStat>
                {boardDetail.author}
              </StyledTextStat>
            </StyledAutorInfo>
            <span>6 시간전</span>
          </StyledStatWrapper>
          <StyledStatWrapper>
            <StyledTextStat>조회수</StyledTextStat>
            <StyledTextStat>{boardDetail.views}</StyledTextStat>
          </StyledStatWrapper>
        </StyledBoardStats>
      </StyledBoardHeader>
      <StyledBoardMain>
        <MarkdownRenderer markdown={boardDetail.description} />
      </StyledBoardMain>
      <StyledBoardFooter>
        <BoardDetailTags />
        <StyledLikeWrapper>
          <StyledLikeText>
            <StyledLike />
            <span>{boardDetail.likes}</span>
          </StyledLikeText>
          <StyledLikeText>
            <StyledCommentIcon />
            <span>{boardDetail.comment_length}</span>
          </StyledLikeText>
        </StyledLikeWrapper>
      </StyledBoardFooter>
    </StyledBoardContents>
  );
}
