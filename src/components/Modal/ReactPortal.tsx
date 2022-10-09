import { useToggleModal } from '@/utils/hooks';

import ReactDOM from 'react-dom';

import ModalFrame from './ModalFrame';

interface ReactPortalProps {
  children: React.ReactNode;
}

export default function ReactPortal({ children }: ReactPortalProps) {
  const container = document.getElementById('portal-root') as HTMLElement;

  const { modalState, toggleModal } = useToggleModal();

  return ReactDOM.createPortal((
    <ModalFrame
      state={modalState}
      handleModal={toggleModal}
    >
      {children}
    </ModalFrame>
  ), container);
}
