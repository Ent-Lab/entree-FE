import styled from "styled-components";

import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledSibebarLink to='/roadmap'>로드맵</StyledSibebarLink>
      <StyledSibebarLink to='/board'>게시판</StyledSibebarLink>
      <StyledSibebarLink to='/career'>채용정보</StyledSibebarLink>
    </StyledSidebar>
  );
};

const StyledSidebar = styled.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 250px;
  top: 0px;
  left: 0px;
  gap: 10px;
  border-radius: 20px;
  margin-top: 70px;
`;

const StyledSibebarLink = styled(NavLink)`
  font-size: 1.7rem;
  width: 150px;
  padding: 10px 15px;
  border-radius: 15px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
  transition: all 0.2s;

  &:visited{
    color: inherit
  }

  &:hover{
    color: ${(props) => props.theme.textColor};
    background-color: ${(props) => props.theme.cardColor};
    box-shadow: 0 5px 18px -7px rgba(0,0,0,1);
  }
`;