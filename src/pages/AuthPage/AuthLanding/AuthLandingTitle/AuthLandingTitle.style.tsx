import styled from "styled-components";

export const StyledAuthTitle = styled.div`
  text-align: center;
  font-weight: bold;
  color: #838181;
  font-size: 1.4rem;
  line-height: 2rem;
  &:after{
    content: '3초 만에 로그인하고 \\A 더 많은 서비스를 이용해보세요.';
    white-space: pre;
  }
  
  @media only screen and (min-width: 768px) {
    font-size: 1.7rem;
    line-height: 3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.2rem;
    line-height: 4rem;
  }
`;
