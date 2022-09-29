import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  background-color: #202020;
`;

export const StyledLogoImg = styled.img`
  width: 45px;
  height: 45px;
`;

export const StyledHeaderLink = styled(NavLink)`
  &:visited{
    color: inherit;
  }
`;

export const StyledNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 15%;
`;