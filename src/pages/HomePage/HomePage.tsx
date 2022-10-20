
import CategoriesContainer from "./Categories/CategoriesContainer/CategoriesContainer";

import {
  StyledHomePage,
  StyledLoadmapWrapper,
} from "./HomePage.style";

export default function HomePage() {
  return (
    <StyledHomePage>
      <CategoriesContainer />
      <StyledLoadmapWrapper>
        loadmap
      </StyledLoadmapWrapper>
    </StyledHomePage>
  );
};
