import { StyledLogo, StyledLogoWrapper } from "./AuthLogo.style";

import entreeDarkLogo from '@/assets/images/entree-symbol-logo-dark.png';
import entreeLightLogo from '@/assets/images/entree-symbol-logo-light.png';

import { useRecoilValue } from "recoil";
import { themeAtom } from "@/store/mode";

export default function AuthLogo() {
  const theme = useRecoilValue(themeAtom);
  return (
    <StyledLogoWrapper>
      {theme === 'dark' ?
        <StyledLogo src={entreeDarkLogo} />
        :
        <StyledLogo src={entreeLightLogo} />
      }
    </StyledLogoWrapper>
  );
};
