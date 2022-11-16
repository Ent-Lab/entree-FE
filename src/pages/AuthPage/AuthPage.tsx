import { ACCESS_TYPE } from "@/utils/constants";

import { useAccessTypeState } from "@/utils/hooks";

import Auth from "./Auth/Auth";
import AuthLanding from "./AuthLanding/AuthLanding";
import AuthLandingForm from "./AuthLanding/AuthLandingForm/AuthLandingForm";


export default function AuthPage() {
  const { accessType, handleAccessType, changeAccessType } = useAccessTypeState();

  return (
    <AuthLandingForm>
      {
        accessType === ACCESS_TYPE.LANDING ?
          <AuthLanding
            changeAccessType={changeAccessType}
          /> :
          <Auth
            changeAccessType={changeAccessType}
            handleAccessType={handleAccessType}
            accessType={accessType}
          />
      }
    </AuthLandingForm>
  );
};
