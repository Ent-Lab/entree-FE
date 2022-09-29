import styled from "styled-components";
import entreeLightLogo from "@/assets/images/entree-symbol-logo-dark.png";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogoWrapper>
        <StyledLogoImg src={entreeLightLogo} />
      </StyledLogoWrapper>
      <StyledNavWrapper>
      </StyledNavWrapper>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledLogoImg = styled.img`
  width: 50px;
  height: 50px;
`;

const StyledLogoWrapper = styled.div`
  padding: 15px;
`;

const StyledNavWrapper = styled.div`
  
`;