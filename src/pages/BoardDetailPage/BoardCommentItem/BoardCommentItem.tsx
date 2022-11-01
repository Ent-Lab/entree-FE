import { useState } from "react";

import Avatar from "@/components/Avatar/Avatar";

import {
  StlyedDropDownItem,
  StyledCommentContents,
  StyledCommentDropDown,
  StyledCommentEllipsis,
  StyledCommentHeader,
  StyledCommentUpdateTime,
  StyledCommentUserInfo,
  StyledCommentUserName,
  StyledCommentWrapper,
  StyledTextInfoWrapper
} from "./BoardCommentItem.style";

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
