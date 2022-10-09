import { userToken } from "@/store/user";

import { Navigate } from "react-router-dom";

import { useRecoilValue } from "recoil";

interface RequireAuthProps {
  children: React.ReactNode;
}

export function AuthRouter({ children }: RequireAuthProps) {
  const token = useRecoilValue(userToken);

  if (token === null) return <Navigate to="/login" />;

  return <>{children}</>;
};
