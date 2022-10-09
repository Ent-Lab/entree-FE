import { AiOutlineCloseCircle } from '@react-icons/all-files/ai/AiOutlineCloseCircle';

import { StyledBackground, StyledClose, StyledContainer, StyledModal } from './ModalFrame.style';

export default function ModalFrame({
  handleModal,
  state,
  children,
}: {
  handleModal: (e: React.MouseEvent<HTMLDivElement>) => void;
  state: boolean;
  children: React.ReactNode;
}) {
  return state ? (
    <StyledContainer>
      <StyledBackground onClick={(e) => handleModal(e)} />
      <StyledModal>{children}</StyledModal>
      <StyledClose onClick={(e) => handleModal(e)}>
        <button>닫기</button>
      </StyledClose>
    </StyledContainer>
  ) : (
    <></>
  );
};
