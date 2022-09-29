import entreeLightLogo from "@/assets/images/entree-symbol-logo-dark.png";
import defaultProfile from "@/assets/images/defaultProfile.jpeg";
import { MdBookmark } from "@react-icons/all-files/md/MdBookmark";
import { CgHome } from "@react-icons/all-files/cg/CgHome";
import { CgDarkMode } from "@react-icons/all-files/cg/CgDarkMode";

import styled from "styled-components";
import { Link } from "react-router-dom";

import Avatar from "@/components/Avatar/Avatar";


export default function Header() {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogoImg src={entreeLightLogo} />
      </StyledLogoWrapper>
      <StyledNavWrapper>
        <CgDarkMode size={'35px'} />
        <CgHome size={'35px'} />
        <MdBookmark size={'35px'} />
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
  padding: 15px;
  background-color: black;
`;

const StyledLogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledLogoWrapper = styled.div`
`;

const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15%;
`;