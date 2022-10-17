import styled from "styled-components";

import ReactPortal from "@/layouts/Modal/ReactPortal";

import { useToggleModal } from "@/utils/hooks";

import AuthPage from "@/pages/AuthPage/AuthPage";

export default function HeaderNoAvatar() {
  const { modalState, toggleModal } = useToggleModal();

  return (
    <>
      <StyledButton
        type="button"
        onClick={toggleModal}
      >
        로그인
      </StyledButton>
      {modalState &&
        <ReactPortal>
          <AuthPage />
        </ReactPortal>
      }
    </>
  );
};

const StyledButton = styled.button`
  font-size: 1.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color : ${(props) => props.theme.textColor}
`;