import { useState } from "react";
import {
  StyledCategories,
  StyledCategoriesWrapper,
  StyledHomePage,
  StyledLoadmapWrapper,
  StyledSelectButton
} from "./HomePage.style";

export default function HomePage() {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('직무를 선택하세요');

  const handleSelectBoxToggle = () => {
    setIsToggled((currentState) => !currentState);
  };

  return (
    <StyledHomePage>
      <StyledCategoriesWrapper>
        <StyledSelectButton
          type="button"
          onClick={handleSelectBoxToggle}
          value={selectedCategory}
        />
        {isToggled &&
          <StyledCategories >
            <li>
              <button type="button" >
                Python
              </button>
            </li>
            <li>
              <button type="button" >
                Java
              </button>
            </li>
          </StyledCategories>
        }
      </StyledCategoriesWrapper>
      <StyledLoadmapWrapper>
        loadmap
      </StyledLoadmapWrapper>
    </StyledHomePage>
  );
};
