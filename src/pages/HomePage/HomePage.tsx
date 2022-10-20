import { useState } from "react";
import {
  StyledCategories,
  StyledCategoriesWrapper,
  StyledCategory,
  StyledCategoryButton,
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

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
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
            <StyledCategory>
              <StyledCategoryButton
                type="button"
                onClick={() => handleSelectCategory('Front-End')}
              >
                Front-End
              </StyledCategoryButton>
            </StyledCategory>
            <StyledCategory>
              <StyledCategoryButton
                type="button"
                onClick={() => handleSelectCategory('Back-End')}
              >
                Back-End
              </StyledCategoryButton>
            </StyledCategory>
            <StyledCategory>
              <StyledCategoryButton
                type="button"
                onClick={() => handleSelectCategory('DevOps')}
              >
                DevOps
              </StyledCategoryButton>
            </StyledCategory>
            <StyledCategory>
              <StyledCategoryButton
                type="button"
                onClick={() => handleSelectCategory('QA')}
              >
                QA
              </StyledCategoryButton>
            </StyledCategory>
          </StyledCategories>
        }
      </StyledCategoriesWrapper>
      <StyledLoadmapWrapper>
        loadmap
      </StyledLoadmapWrapper>
    </StyledHomePage>
  );
};
