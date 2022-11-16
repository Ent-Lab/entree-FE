import {
  StyledBackground,
  StyledClose,
  StyledContainer,
  StyledModalBlock,
  StyledModalContents
} from "./ModalFrame.style";

import { AiFillCloseCircle } from '@react-icons/all-files/ai/AiFillCloseCircle';

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
      <StyledModalBlock>
        <StyledModalContents>
          {children}
        </StyledModalContents>
        <StyledClose onClick={(e) => handleModal(e)}>
          <AiFillCloseCircle />
        </StyledClose>
      </StyledModalBlock>
    </StyledContainer>
  ) : (
    <></>
  );
};
