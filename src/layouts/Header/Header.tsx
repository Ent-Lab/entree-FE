import entreeLightLogo from "@/assets/images/entree-symbol-logo-dark.png";
import defaultProfile from "@/assets/images/defaultProfile.jpeg";
import { MdBookmark } from "@react-icons/all-files/md/MdBookmark";
import { CgHome } from "@react-icons/all-files/cg/CgHome";
import { CgDarkMode } from "@react-icons/all-files/cg/CgDarkMode";

import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Avatar from "@/components/Avatar/Avatar";


export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderLink to='/'>
        <StyledLogoImg src={entreeLightLogo} />
      </StyledHeaderLink>
      <StyledNavWrapper>
        <CgDarkMode size={'35px'} />
        <StyledHeaderLink to='/'>
          <CgHome size={'35px'} />
        </StyledHeaderLink>
        <StyledHeaderLink to='/bookmark'>
          <MdBookmark size={'35px'} />
        </StyledHeaderLink>
        <Avatar src={defaultProfile} size={'md'} />
      </StyledNavWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #202020;
`;

const StyledLogoImg = styled.img`
  width: 45px;
  height: 45px;
`;

const StyledHeaderLink = styled(NavLink)`
  &:visited{
    color: inherit;
  }
`;

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15%;
`;