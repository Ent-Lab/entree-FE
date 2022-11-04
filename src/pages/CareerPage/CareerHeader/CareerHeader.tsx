import styled from "styled-components";

import SearchForm from "@/components/SearchForm/SearchForm";
import CareerTagFilter from "../CareerTagFilter/CareerTagFilter";

export default function CareerHeader() {

  const searchInputHandler = (value: string) => {
    console.log(value);
  };

  return (
    <StyledCareerHeader>
      <CareerTagFilter />
      <SearchForm onChange={searchInputHandler} />
    </StyledCareerHeader>
  );
}

const StyledCareerHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
