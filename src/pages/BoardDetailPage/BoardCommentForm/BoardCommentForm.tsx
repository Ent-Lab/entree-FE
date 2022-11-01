import Avatar from "@/components/Avatar/Avatar";

import { useState } from "react";

import styled from "styled-components";

const maxLength = 200;

export default function BoardCommentForm() {
  const [newComment, setNewComment] = useState('');

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { target: { value } } = event;
    setNewComment(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <StyledBoardCommentForm>
      <StyledBoardCommentAvatar>
        <Avatar src='' size={'md'} />
        <span>
          김정현
        </span>
      </StyledBoardCommentAvatar>
      <StyledCommentForm onSubmit={onSubmit}>
        <StyledCommentTextArea
          maxLength={maxLength}
          placeholder="댓글 남기기"
          value={newComment}
          onChange={handleTextArea}
        />
        <StyledCommentLengthCheck>
          {newComment.length}{'/'}{maxLength}
        </StyledCommentLengthCheck>
        <StyledCommentSubmitButton
          type="submit"
          disabled={!newComment.length}
        >
          등록
        </StyledCommentSubmitButton>
      </StyledCommentForm>
    </StyledBoardCommentForm >
  );
}

const StyledBoardCommentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

const StyledBoardCommentAvatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const StyledCommentForm = styled.form`
  width: 100%;
  height: 150px;
  position: relative;
`;

const StyledCommentTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 15px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.borderBottom};
  border-radius: 10px;
  outline-color: ${(props) => props.theme.borderBottom};
  resize: none;
  font-size: 1.8rem;
`;

const StyledCommentLengthCheck = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

const StyledCommentSubmitButton = styled.button<{ disabled: boolean; }>`
  position: absolute;
  right: 20px;
  bottom: 20px;
  border: none;
  padding: 8px 20px;
  border-radius: 15px;
  background-color: ${(props) => props.disabled ? 'lightgray' : '#15b1ff'};
  font-size: 1.6rem;
  font-weight: 500;
  transition: all 0.2s ease -in;

  ${(props) => !props.disabled && (
    `
      cursor: pointer;
      &:hover{
      background-color: #0487c8;
    }
    `
  )}
  
`;