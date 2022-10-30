import { Link } from "react-router-dom";

import styled from "styled-components";

export const StyledBoardItem = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.cardColor};
  border-bottom: 1px solid lightgray;
`;

export const StyledBoardSummaryStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
`;

export const StyledSummaryStats = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  color: gray;
`;

export const StyledSummaryStat = styled.span`
  font-weight: 500;
`;

export const StyledBoardSummaryContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
`;

export const StyledSummaryContentInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledTags = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const StyledTag = styled.div`
  display: flex;
  padding: 4px 8px;
  color: white;
  background-color: #6565ff;
  border-radius: 10px;
`;

export const StyledBoardSummaryTitle = styled(Link)`
  font-size: 2rem;
  font-weight: 500;
  color: inherit;

  &:visited{
    color: ${(props) => props.theme.textColor}
  }

  &:hover{
    color: #6060f9;
    text-decoration: underline;
  }
`;

export const StyledBoardText = styled.span`
  cursor: text;
`;

export const StyledAuthorInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  padding-right: 40px;
  color: gray;
  font-weight: 500;
`;