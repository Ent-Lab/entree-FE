import ReactPortal from "@/components/Modal/ReactPortal";
import { useToggleModal } from "@/utils/hooks";
import styled from "styled-components";

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
          <div>로그인창</div>
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
`;