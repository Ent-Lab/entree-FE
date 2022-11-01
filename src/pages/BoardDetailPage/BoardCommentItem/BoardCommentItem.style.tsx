import styled from "styled-components";

import { AiOutlineEllipsis } from "@react-icons/all-files/ai/AiOutlineEllipsis";

export const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  padding: 15px;
`;

export const StyledCommentHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledCommentUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StyledCommentUserName = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const StyledCommentUpdateTime = styled.span`
  font-size: 1.4rem;
  color: gray;
`;

export const StyledTextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledCommentContents = styled.div`
  padding: 10px;
`;

export const StyledCommentEllipsis = styled(AiOutlineEllipsis)`
  font-size: 2rem;
  cursor: pointer;
`;

export const StyledCommentDropDown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: -50px;
  top: 15px;
  width: 80px;
  height: 100px;
  border: 1px solid ${(props) => props.theme.borderBottom};
  border-radius: 10px;
  background-color: ${(props) => props.theme.cardColor};
`;

export const StlyedDropDownItem = styled.div`
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 10px;

  &:hover{
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.accentColor};
  }
`;
