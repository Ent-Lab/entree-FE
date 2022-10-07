import { NavLink } from "react-router-dom";

import styled from "styled-components";

export const StyledHeader = styled.div`
  z-index: 1;
  position: fixed;
  top: 0px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: ${(props) => props.theme.headerColor};
  transition: background 0.2s ease-in, color 0.2s ease-in;
`;

export const StyledLogoImg = styled.img`
  width: 45px;
  height: 45px;
`;

export const StyledHeaderLink = styled(NavLink)`
  &:visited{
    color: inherit;
  }

  &:hover{
    color: ${(props) => props.theme.accentColor}
  }
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15%;
`;
