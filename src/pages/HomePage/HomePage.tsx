import CategoriesContainer from "./Categories/CategoriesContainer/CategoriesContainer";
import RoadmapContainer from "./Roadmap/RoadmapContainer/RoadmapContainer";

import { StyledHomePage } from "./HomePage.style";

export default function HomePage() {
  return (
    <StyledHomePage>
      <CategoriesContainer />
      <RoadmapContainer />
    </StyledHomePage>
  );
};
