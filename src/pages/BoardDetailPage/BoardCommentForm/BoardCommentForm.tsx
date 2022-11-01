import Avatar from "@/components/Avatar/Avatar";

import { useState } from "react";

import {
  StyledBoardCommentAvatar,
  StyledBoardCommentForm,
  StyledCommentForm,
  StyledCommentLengthCheck,
  StyledCommentSubmitButton,
  StyledCommentTextArea
} from "./BoardCommentForm.style";

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
