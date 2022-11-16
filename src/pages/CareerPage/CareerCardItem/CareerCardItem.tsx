import styled from "styled-components";

import { TiArrowUpThick } from "@react-icons/all-files/ti/TiArrowUpThick";
import CareerCardTag from "../CareerCardTag/CareerCardTag";

export default function CareerCardItem({ company }) {
  return (
    <StyledCardContent>
      <StyledCardImage>
        <StyledThumnailImage className="thumnail_image" src={company.thumnail_img} />
      </StyledCardImage>
      <StyledCompanyInfo>
        <StyledCompanyInfoHeader>
          <StyledCompanyTitle>{company.title}</StyledCompanyTitle>
          <StyledCompanyName>{company.company_name}</StyledCompanyName>
        </StyledCompanyInfoHeader>
        <StyledCompanyStats>
          <span>{company.regions.country}{'/'}{company.regions.city}</span>
          <StyledCompanySalary>{company.expected_salary}만원 <TiArrowUpThick /></StyledCompanySalary>
        </StyledCompanyStats>
      </StyledCompanyInfo>
      <StyledCardTags>
        {company.tags.map((tag) => (
          <CareerCardTag key={tag.id} tag={tag} />
        ))}
      </StyledCardTags>
    </StyledCardContent>
  );
}

const StyledCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 270px;
  gap: 5px;
  padding-bottom: 3px;
  transition: all 0.1s ease-in;
  overflow: hidden;
  cursor: pointer;

  &:hover{
    background-color: ${(props) => props.theme.cardColor};
    border-radius: 10px;
    transform: scale(1.05);
    box-shadow: 0 5px 18px -7px ${(props) => props.theme.boxShadow};

    .thumnail_image {
      border-radius: 0px;
      border-top-right-radius: 10px;
      border-top-left-radius: 10px;
    }
  }

  @media screen and (min-width: 1920px) {
    width: 320px;
    height: 360px;
  }
`;

const StyledCardImage = styled.div`
  width: 100%;
  height: 55%;

  @media screen and (min-width: 768px) {
    height: 100px;
  }

  @media screen and (min-width: 1024px) {
    height: 150px;
  }

  @media screen and (min-width: 1920px) {
    height: 200px;
  }
`;

const StyledThumnailImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: all 0.1s ease-in;
`;

const StyledCompanyInfo = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 5px 0px 5px;
`;

const StyledCompanyInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const StyledCompanyTitle = styled.span`
  font-size: 1.8rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1024px) {
    font-size: 1.8rem;
  }

  @media screen and (min-width: 1920px) {
    font-size: 2.2rem;
  }
`;

const StyledCompanyName = styled.span`
  font-weight: 500;
  @media screen and (min-width: 1920px) {
    font-size: 2rem;
  }
`;

const StyledCompanyStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1.4rem;

  @media screen and (min-width: 1920px) {
    font-size: 1.8rem;
  }
`;

const StyledCompanySalary = styled.div`
  color: #6060f9;
`;

const StyledCardTags = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  gap: 5px;
`;