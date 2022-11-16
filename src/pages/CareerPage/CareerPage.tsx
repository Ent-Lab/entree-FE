import styled from 'styled-components';

import CareerContainer from './CareerContainer/CareerContainer';

export default function CareerPage() {
  return (
    <StyledCareer>
      <CareerContainer />
    </StyledCareer>
  );
}

const StyledCareer = styled.div`
  width: 80%;
  min-height: 100%;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 50px 50px 50px;

  @media screen and (min-width: 768px) {
    
  }

  @media screen and (min-width: 1024px) {
    
  }
`;
