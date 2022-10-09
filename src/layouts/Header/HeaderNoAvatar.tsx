import styled from "styled-components";

export default function HeaderNoAvatar() {
  return (
    <StyledButton type="button">로그인</StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 1.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;