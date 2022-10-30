import styled from "styled-components";

import { BiLike } from "@react-icons/all-files/bi/BiLike";
import { BiComment } from "@react-icons/all-files/bi/BiComment";
import MarkdownRenderer from "@/components/MarkdownRenderer/MarkdownRenderer";
import Avatar from "@/components/Avatar/Avatar";
import BoardDetailTags from "../BoardDetailTags/BoardDetailTags";

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

const StyledBoardContents = styled.div`
  width: 100%;
  min-height: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledBoardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderBottom};
`;

const StyledBoardTitle = styled.span`
  font-size: 3rem;
  font-weight: 500;
  cursor: text;
`;

const StyledBoardStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  color: gray;
`;

const StyledStatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const StyledAutorInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const StyledTextStat = styled.span`
  color: ${(props) => props.theme.textColor};
`;

const StyledBoardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledBoardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderBottom};
`;

const StyledLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const StyledLike = styled(BiLike)`
  font-size: 3rem;
  cursor: pointer;
`;

const StyledCommentIcon = styled(BiComment)`
  font-size: 3rem;
`;

const StyledLikeText = styled(StyledTextStat)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 2.2rem;
  font-weight: 500;
`;
