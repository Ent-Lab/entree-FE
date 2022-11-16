export interface ACCESS_TYPE {
  'LANDIG': '랜딩';
  'LOGIN': '로그인';
  'REGISTER': '회원가입';
};

export interface AuthLandingProps {
  changeAccessType: (accessType: string) => void;
}

export interface AuthLandingButtonProps {
  authHandler: (to: string) => void;
  changeAccessType: (accessType: string) => void;
}

export interface AuthProps {
  handleAccessType: (accessType: string) => void;
  accessType: string;
  changeAccessType: (accessType: string) => void;
}

interface userInfo {
  email: string;
  password: string;
  passwordCheck: string;
}

export interface AuthFormProps {
  accessType: string;
  userInfo: userInfo;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleButtonDisabled: () => void;
}