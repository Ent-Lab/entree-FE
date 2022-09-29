import { MdBookmark } from "@react-icons/all-files/md/MdBookmark";
import { StyledHeaderLink } from "./Header.style";

export default function HeaderBookMark() {
  return (
    <StyledHeaderLink to='/bookmark'>
      <MdBookmark size={'35px'} />
    </StyledHeaderLink>
  );
};
