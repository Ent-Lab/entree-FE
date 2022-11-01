import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

import Avatar from "@/components/Avatar/Avatar";

import { AiOutlineEllipsis } from "@react-icons/all-files/ai/AiOutlineEllipsis";

export default function BoardCommentItem({ comment }) {
  const [dropDownState, setDropDownState] = useState(false);

  const toggleDropdown = () => {
    setDropDownState((currentState) => !currentState);
  };

  const onUpdate = () => {

  };

  const onDelete = () => {

  };

  const onReport = () => {

  };

  return (
    <StyledCommentWrapper key={comment.id}>
      <StyledCommentHeader>
        <StyledCommentUserInfo>
          <Avatar src={comment.user.avatar} size={'md'} />
          <StyledTextInfoWrapper>
            <StyledCommentUserName>{comment.user.name}</StyledCommentUserName>
            <StyledCommentUpdateTime>6 시간전</StyledCommentUpdateTime>
          </StyledTextInfoWrapper>
        </StyledCommentUserInfo>
        <StyledCommentEllipsis
          onClick={toggleDropdown}
        />
        {dropDownState && (
          <StyledCommentDropDown >
            <StlyedDropDownItem onClick={onUpdate}>
              수정
            </StlyedDropDownItem>
            <StlyedDropDownItem onClick={onDelete}>
              삭제
            </StlyedDropDownItem>
            <StlyedDropDownItem onClick={onReport}>
              신고
            </StlyedDropDownItem>
          </StyledCommentDropDown>
        )}
      </StyledCommentHeader>
      <StyledCommentContents>
        {comment.description}
      </StyledCommentContents>
    </StyledCommentWrapper>
  );
}

const StyledCommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 10px;
  padding: 15px;
`;

const StyledCommentHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledCommentUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledCommentUserName = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;

const StyledCommentUpdateTime = styled.span`
  font-size: 1.4rem;
  color: gray;
`;

const StyledTextInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCommentContents = styled.div`
  padding: 10px;
`;

const StyledCommentEllipsis = styled(AiOutlineEllipsis)`
  font-size: 2rem;
  cursor: pointer;
`;

const StyledCommentDropDown = styled.div`
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

const StlyedDropDownItem = styled.div`
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 10px;

  &:hover{
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.accentColor};
  }
`;
