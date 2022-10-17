import { useEffect } from "react";

import ReactPortal from "@/layouts/Modal/ReactPortal";

import { useToggleModal } from "@/utils/hooks";
import { useNavigate } from "react-router-dom";

import AuthPage from "@/pages/AuthPage/AuthPage";

interface RequireAuthProps {
  children: React.ReactNode;
}

export function AuthRouter({ children }: RequireAuthProps) {
  const token = localStorage.getItem('accessToken');
  const navigate = useNavigate();
  const { toggleModal } = useToggleModal();

  useEffect(() => {
    if (token === null) {
      navigate('/');
      toggleModal();
    }
  }, []);

  if (token === null) {
    return (
      <>
        <ReactPortal>
          <AuthPage />
        </ReactPortal>
      </>
    );
  }

  return <>{children}</>;
};
