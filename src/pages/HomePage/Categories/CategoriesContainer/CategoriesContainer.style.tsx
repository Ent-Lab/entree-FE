import styled from "styled-components";

export const StyledCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const StyledSelectButton = styled.input`
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  font-size: 3rem;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  transition: color 0.2s ease-in ;
  padding-bottom: 5px;

  &:hover{
    color: ${(props) => props.theme.accentColor};
  }
`;
