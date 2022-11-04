import styled from "styled-components";

import CareerContentList from "../CareerContentList/CareerContentList";
import CareerHeader from "../CareerHeader/CareerHeader";

const data = [
  {
    id: 1,
    title: '프론트엔드 개발자 채용',
    company_name: 'wanted',
    thumnail_img: 'https://picsum.photos/id/237/300/200',
    expected_salary: '3000',
    regions: {
      country: '한국',
      city: '서울',
    },
    tags: [
      {
        id: 1,
        name: 'react'
      },
      {
        id: 2,
        name: 'javascript'
      },
      {
        id: 3,
        name: 'frontend'
      },
    ]
  },
  {
    id: 2,
    title: '백엔드 개발자 채용',
    company_name: '야놀자',
    thumnail_img: 'https://picsum.photos/id/200/300/200',
    expected_salary: '4000',
    regions: {
      country: '한국',
      city: '서울',
    },
    tags: [
      {
        id: 1,
        name: 'java'
      },
      {
        id: 2,
        name: 'backend'
      },
    ]
  },
  {
    id: 3,
    title: '데브옵스 엔지니어 채용',
    company_name: '토스',
    thumnail_img: 'https://picsum.photos/id/100/300/200',
    expected_salary: '5000',
    regions: {
      country: '한국',
      city: '서울',
    },
    tags: [
      {
        id: 1,
        name: 'devops'
      },
      {
        id: 2,
        name: 'linux'
      },
    ]
  },
  {
    id: 4,
    title: '백엔드 개발자 채용',
    company_name: '토스',
    thumnail_img: 'https://picsum.photos/id/210/300/200',
    expected_salary: '6000',
    regions: {
      country: '한국',
      city: '서울',
    },
    tags: [
      {
        id: 1,
        name: 'java'
      },
      {
        id: 2,
        name: 'backend'
      },
    ]
  },
  {
    id: 5,
    title: '리액트 개발자 채용',
    company_name: '당근마켓',
    thumnail_img: 'https://picsum.photos/id/190/300/200',
    expected_salary: '6000',
    regions: {
      country: '한국',
      city: '서울',
    },
    tags: [
      {
        id: 1,
        name: 'typescript'
      },
      {
        id: 2,
        name: 'frontend'
      },
    ]
  },
  {
    id: 6,
    title: '백엔드 개발자 채용',
    company_name: '야놀자',
    thumnail_img: 'https://picsum.photos/id/10/300/200',
    expected_salary: '5000',
    regions: {
      country: '한국',
      city: '서울',
    },
    tags: [
      {
        id: 1,
        name: 'java'
      },
      {
        id: 2,
        name: 'backend'
      },
    ]
  },
  {
    id: 7,
    title: '백엔드 개발자 채용',
    company_name: '야놀자22',
    thumnail_img: 'https://picsum.photos/id/5/300/200',
    expected_salary: '3000',
    regions: {
      country: '한국',
      city: '제주',
    },
    tags: [
      {
        id: 1,
        name: 'java'
      },
      {
        id: 2,
        name: 'backend'
      },
    ]
  },
  {
    id: 8,
    title: '프론트 개발자 채용',
    company_name: '야놀자5',
    thumnail_img: 'https://picsum.photos/id/20/300/200',
    expected_salary: '4000',
    regions: {
      country: '한국',
      city: '부산',
    },
    tags: [
      {
        id: 1,
        name: 'java'
      },
      {
        id: 2,
        name: 'backend'
      },
    ]
  },
  {
    id: 9,
    title: '백엔드 개발자 채용',
    company_name: '야놀자',
    thumnail_img: 'https://picsum.photos/id/22/300/200',
    expected_salary: '4000',
    regions: {
      country: '한국',
      city: '서울',
    },
    tags: [
      {
        id: 1,
        name: 'java'
      },
      {
        id: 2,
        name: 'backend'
      },
    ]
  },
];

export default function CareerContainer() {
  return (
    <StyledCareerContainer>
      <CareerHeader />
      <CareerContentList companies={data} />
    </StyledCareerContainer>
  );
}

const StyledCareerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
