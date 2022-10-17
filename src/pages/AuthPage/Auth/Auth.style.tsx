import styled from 'styled-components';

export const StyledAuth = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAuthForm = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.accentColor};
  font-size: 1.4rem;
  cursor: pointer;
  &:hover{
    color: ${props => props.theme.textColor};
  }
`;
