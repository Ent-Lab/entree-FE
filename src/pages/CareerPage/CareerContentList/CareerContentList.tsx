import styled from "styled-components";

import CareerCardItem from "../CareerCardItem/CareerCardItem";

export default function CareerContentList({ companies }) {
  return (
    <StyledContentListWrapper>
      {companies.map((company) => (
        <CareerCardItem key={company.id} company={company} />
      ))}
    </StyledContentListWrapper>
  );
}

const StyledContentListWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;

