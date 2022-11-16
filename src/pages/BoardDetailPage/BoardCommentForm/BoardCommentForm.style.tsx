import styled from "styled-components";

export const StyledBoardCommentForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export const StyledBoardCommentAvatar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const StyledCommentForm = styled.form`
  width: 100%;
  height: 150px;
  position: relative;
`;

export const StyledCommentTextArea = styled.textarea`
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

export const StyledCommentLengthCheck = styled.div`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

export const StyledCommentSubmitButton = styled.button<{ disabled: boolean; }>`
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