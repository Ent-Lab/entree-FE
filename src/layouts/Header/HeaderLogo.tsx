import entreeDarkLogo from '@/assets/images/entree-symbol-logo-dark.png';

import { StyledHeaderLink, StyledLogoImg } from './Header.style';

export default function HeaderLogo() {
  return (
    <StyledHeaderLink to='/'>
      <StyledLogoImg src={entreeDarkLogo} />
    </StyledHeaderLink>
  );
};
