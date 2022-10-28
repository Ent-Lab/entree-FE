import { FcGoogle } from '@react-icons/all-files/fc/FcGoogle';
import { FcApprove } from '@react-icons/all-files/fc/FcApprove';
import { RiKakaoTalkFill } from '@react-icons/all-files/ri/RiKakaoTalkFill';

import {
  StyledAuthButtonsWrapper,
  StyledGoogleButton,
  StyledKakaoButton,
  StyledLoginButton
} from './AuthLandingButton.style';

import { ACCESS_TYPE } from '@/utils/constants';

import { AuthLandingButtonProps } from '@/types/auth';

export default function AuthLandingButton({ authHandler, changeAccessType }: AuthLandingButtonProps) {
  return (
    <StyledAuthButtonsWrapper>
      <StyledGoogleButton onClick={() => authHandler('/auth/google')}>
        <FcGoogle />
        <span>구글 이메일로 시작하기</span>
      </StyledGoogleButton>
      <StyledKakaoButton onClick={() => authHandler('/auth/kakao')}>
        <RiKakaoTalkFill />
        <span>카카오 아이디로 시작하기</span>
      </StyledKakaoButton>
      <StyledLoginButton onClick={() => changeAccessType(ACCESS_TYPE.REGISTER)}>
        <FcApprove />
        <span>Entree 로그인</span>
      </StyledLoginButton>
    </StyledAuthButtonsWrapper>
  );
};
