import { StyledHeader, StyledNavWrapper } from "./Header.style";

import HeaderLogo from "./HeaderLogo";
import HeaderModeButton from "./HeaderModeButton";
import HeaderHome from "./HeaderHome";
import HeaderBookMark from "./HeaderBookMark";
import HeaderAvatar from "./HeaderAvatar";

import { useRecoilValue } from "recoil";

import { userState, userToken } from "@/store/user";
import HeaderNoAvatar from "./HeaderNoAvatar";

export default function Header() {
  const token = useRecoilValue(userToken);

  return (
    <StyledHeader>
      <HeaderLogo />
      <StyledNavWrapper>
        <HeaderModeButton />
        <HeaderHome />
        <HeaderBookMark />
        {token ?
          <>
            <HeaderAvatar />
          </>
          :
          <HeaderNoAvatar />
        }
      </StyledNavWrapper>
    </StyledHeader>
  );
};
