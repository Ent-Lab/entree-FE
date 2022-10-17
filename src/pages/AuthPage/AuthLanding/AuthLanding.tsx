import { AuthLandingProps } from "@/types/auth";

import AuthLandingButton from "./AuthLandingButton/AuthLandingButton";
import AuthLandingLogo from "./AuthLandingLogo/AuthLandingLogo";
import AuthLandingTitle from "./AuthLandingTitle/AuthLandingTitle";

import { StyledAuthLanding } from "./AuthLanding.style";

export default function AuthLanding({ changeAccessType }: AuthLandingProps) {
  const authHandler = (to: string) => {
    if (process.env.NODE_ENV !== 'development') {
      window.location.href = 'baseURL' + to;
    } else {
      window.location.href = to;
    }
  };

  return (
    <StyledAuthLanding>
      <AuthLandingLogo />
      <AuthLandingTitle />
      <AuthLandingButton
        authHandler={authHandler}
        changeAccessType={changeAccessType}
      />
    </StyledAuthLanding>
  );
};
