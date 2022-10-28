import { CATEGORY_LIST } from "@/constants/categories";

import {
  StyledCategories,
  StyledCategory,
  StyledCategoryButton
} from "./CategoryList.style";

interface CategoryListProps {
  handleSelectCategory: (category: string) => void;
}

export default function CategoryList({ handleSelectCategory }: CategoryListProps) {
  return (
    <StyledCategories >
      {CATEGORY_LIST.map((category) => (
        <StyledCategory>
          <StyledCategoryButton
            type="button"
            onClick={() => handleSelectCategory(category)}
          >
            {category}
          </StyledCategoryButton>
        </StyledCategory>
      ))}
    </StyledCategories>
  );
};
