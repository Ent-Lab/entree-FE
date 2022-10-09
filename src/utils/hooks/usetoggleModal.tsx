import { modalAtom } from "@/store/modal";

import { useRecoilState, useRecoilValue } from "recoil";

export const useToggleModal = () => {
  const [modalState, setModalState] = useRecoilState(modalAtom);

  const toggleModal = () => {
    setModalState((prev) => !prev);
  };

  return { modalState, toggleModal };
};