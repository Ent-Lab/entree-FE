import styled from "styled-components";

import { BiLike } from "@react-icons/all-files/bi/BiLike";
import { BiComment } from "@react-icons/all-files/bi/BiComment";

export const StyledBoardContents = styled.div`
  width: 100%;
  min-height: 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const StyledBoardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderBottom};
`;

export const StyledBoardTitle = styled.span`
  font-size: 3rem;
  font-weight: 500;
  cursor: text;
`;

export const StyledBoardStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
  color: gray;
`;

export const StyledStatWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const StyledAutorInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

export const StyledTextStat = styled.span`
  color: ${(props) => props.theme.textColor};
`;

export const StyledBoardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledBoardFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderBottom};
`;

export const StyledLikeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const StyledLike = styled(BiLike)`
  font-size: 3rem;
  cursor: pointer;
`;

export const StyledCommentIcon = styled(BiComment)`
  font-size: 3rem;
`;

export const StyledLikeText = styled(StyledTextStat)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  font-size: 2.2rem;
  font-weight: 500;
`;
