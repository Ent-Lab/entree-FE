import { useState } from "react";
import CategoryList from "../CategoryList/CategoryList";

import {
  StyledCategoriesWrapper,
  StyledSelectButton
} from "./CategoriesContainer.style";

export default function CategoriesContainer() {
  const [isToggled, setIsToggled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('직무를 선택하세요');

  const handleSelectBoxToggle = () => {
    setIsToggled((currentState) => !currentState);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
    setIsToggled((currentState) => !currentState);
  };

  return (
    <StyledCategoriesWrapper>
      <StyledSelectButton
        type="button"
        onClick={handleSelectBoxToggle}
        value={selectedCategory}
      />
      {isToggled &&
        <CategoryList
          handleSelectCategory={handleSelectCategory}
        />
      }
    </StyledCategoriesWrapper>
  );
};
