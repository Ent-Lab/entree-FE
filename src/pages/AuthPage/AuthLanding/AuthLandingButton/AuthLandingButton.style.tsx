import styled from 'styled-components';

export const StyledAuthButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 35px;
  padding: 0 20px;
  border-radius: 4px;
  border: none;
  gap: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;

  @media only screen and (min-width: 768px) {
    font-size: 1.2rem;
    gap: 10px;
    height: 40px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.6rem;
    gap: 10px;
    height: 50px;
  }
`;

export const StyledLoginButton = styled(StyledButton)`
  background-color: #badc58;
`;

export const StyledGoogleButton = styled(StyledButton)`
  background-color: #ebebeb;
`;

export const StyledKakaoButton = styled(StyledButton)`
  background-color: #fee500;
`;