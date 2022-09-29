import { CgHome } from '@react-icons/all-files/cg/CgHome';
import { StyledHeaderLink } from './Header.style';

export default function HeaderHome() {
  return (
    <StyledHeaderLink to='/'>
      <CgHome size={'35px'} />
    </StyledHeaderLink>
  );
};
