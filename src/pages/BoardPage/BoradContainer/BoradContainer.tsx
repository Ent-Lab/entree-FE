import styled from "styled-components";

import BoardList from "../BoardList/BoardList";
import SearchForm from "@/components/SearchForm/SearchForm";

export default function BoradContainer() {
  const searchInputHandler = (value: string) => {
    console.log(value);
  };

  return (
    <StyledBoardContainer>
      <SearchForm onChange={searchInputHandler} />
      <BoardList />
    </StyledBoardContainer>
  );
}

const StyledBoardContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
