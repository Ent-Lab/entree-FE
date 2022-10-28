import { ACCESS_TYPE } from '@/utils/constants';

import AuthContent from '../AuthContent/AuthContent';
import Input from '@/components/Input/Input';
import AuthButton from '../AuthButton/AuthButton';

import { StyledInputWrapper } from './AuthForm.style';
import { AuthFormProps } from '@/types/auth';

export default function AuthForm(
  {
    accessType,
    userInfo,
    handleChange,
    handleSubmit,
    handleButtonDisabled
  }: AuthFormProps) {
  return (
    <AuthContent title={accessType}>
      <StyledInputWrapper>
        <Input
          label="이메일"
          size="md"
          name="email"
          type="email"
          value={userInfo.email}
          onChange={(e) => handleChange(e)}
          placeholder="이메일"
        />
        <Input
          label="비밀번호"
          size="md"
          name="password"
          type="password"
          value={userInfo.password}
          onChange={(e) => handleChange(e)}
          placeholder="비밀번호"
        />
        {
          accessType === ACCESS_TYPE.REGISTER &&
          <Input
            label="비밀번호 확인"
            size="md"
            name="passwordCheck"
            value={userInfo.passwordCheck}
            onChange={(e) => handleChange(e)}
            placeholder="비밀번호 확인"
            type="password"
          />
        }
        <AuthButton
          onClick={() => handleSubmit()}
          disabled={handleButtonDisabled()}
        >
          {accessType}
        </AuthButton>
      </StyledInputWrapper>
    </AuthContent>
  );
};
