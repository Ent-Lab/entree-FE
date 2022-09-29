import entreeLightLogo from "@/assets/images/entree-symbol-logo-dark.png";
import defaultProfile from "@/assets/images/defaultProfile.jpeg";
import { MdBookmark } from "@react-icons/all-files/md/MdBookmark";
import { CgHome } from "@react-icons/all-files/cg/CgHome";
import { CgDarkMode } from "@react-icons/all-files/cg/CgDarkMode";

import { StyledHeader, StyledNavWrapper } from "./Header.style";

import HeaderLogo from "./HeaderLogo";
import HeaderModeButton from "./HeaderModeButton";
import HeaderHome from "./HeaderHome";
import HeaderBookMark from "./HeaderBookMark";
import HeaderAvatar from "./HeaderAvatar";

export default function Header() {
  return (
    <StyledHeader>
      <HeaderLogo />
      <StyledNavWrapper>
        <HeaderModeButton />
        <HeaderHome />
        <HeaderBookMark />
        <HeaderAvatar />
      </StyledNavWrapper>
    </StyledHeader>
  );
};

