import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ACCESS_TYPE, initialUserInfo } from "@/constants";

import { AuthProps } from "@/types/auth";

import { validationUserLogin, validationUserRegister } from "@/utils/functions";

import { HiOutlineArrowNarrowRight } from "@react-icons/all-files/hi/HiOutlineArrowNarrowRight";

import { StyledAuthForm, StyledButton, StyledButtonWrapper } from "./Auth.style";

import AuthForm from "./AuthForm/AuthForm";
import AuthWrapper from "./AuthWrapper/AuthWrapper";

export default function Auth({ changeAccessType, handleAccessType, accessType }: AuthProps) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(initialUserInfo);

  useEffect(() => {
    setUserInfo(initialUserInfo);
  }, [accessType]);

  const handleChange = ({ target: { value, name } }) => {
    setUserInfo((currentState) => {
      return {
        ...currentState,
        [name]: value,
      };
    });
  };

  const handleButtonDisabled = () => {
    const { email, password, passwordCheck } = userInfo;

    if (accessType === ACCESS_TYPE.LOGIN) {
      return validationUserLogin(email, password);
    } else if (accessType === ACCESS_TYPE.REGISTER) {
      return validationUserRegister(email, password, passwordCheck);
    }

    return true;
  };

  const handleSubmit = async () => {
    const { email, password } = userInfo;

    // try {
    //   const result = await API_AUTH.userSign(accessType, {
    //     email,
    //     password
    //   });

    //   localStorage.setItem('accessToken', result.access_token);
    //   navigate('/todo');
    // } catch (error) {
    //   console.error(error);
    // }
    console.log('submit');

  };

  return (
    <StyledAuthForm>
      <AuthWrapper>
        <StyledButtonWrapper>
          <StyledButton onClick={() => changeAccessType(accessType)}>
            <>
              {handleAccessType(accessType)}
              <HiOutlineArrowNarrowRight />
            </>
          </StyledButton>
        </StyledButtonWrapper>
        <AuthForm
          accessType={accessType}
          userInfo={userInfo}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleButtonDisabled={handleButtonDisabled}
        />
      </AuthWrapper>
    </StyledAuthForm >
  );
};
