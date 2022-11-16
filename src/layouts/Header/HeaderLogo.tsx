import entreeDarkLogo from '@/assets/images/entree-symbol-logo-dark.png';
import entreeLightLogo from '@/assets/images/entree-symbol-logo-light.png';

import { themeAtom } from '@/store/mode';

import { useRecoilValue } from 'recoil';

import { StyledHeaderLink, StyledLogoImg } from './Header.style';

export default function HeaderLogo() {
  const theme = useRecoilValue(themeAtom);

  return (
    <StyledHeaderLink to='/'>
      {theme === 'dark' ?
        <StyledLogoImg src={entreeDarkLogo} />
        :
        <StyledLogoImg src={entreeLightLogo} />
      }
    </StyledHeaderLink>
  );
};
