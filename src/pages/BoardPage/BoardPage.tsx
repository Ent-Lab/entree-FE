import styled from "styled-components";

import BoradContainer from "./BoradContainer/BoradContainer";

export default function BoardPage() {
  return (
    <StyledBoard>
      <BoradContainer />
    </StyledBoard>
  );
}

const StyledBoard = styled.div`
  position: relative;
  width: 80%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 100px 50px 50px;
  
  @media screen and (min-width: 768px) {
    
  }

  @media screen and (min-width: 1024px) {
    
  }
`;
