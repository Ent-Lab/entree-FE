import styled from "styled-components";

export const StyledHomePage = styled.div`
  position: relative;
  width: 80%;
  height: calc(100vh - 70px);
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const StyledCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  width: 100%;
  height: 10%;
`;

export const StyledLoadmapWrapper = styled.div`
  width: 100%;
  height: 90%;
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

export const StyledCategories = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.cardColor};
  border: 1px solid cardColor;
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgb(0 0 0 / 15%);
  top: 110px;
  left: 50;
`;

export const StyledCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid lightgray;
`;

export const StyledCategoryButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;

  &:hover{
    color: ${(props) => props.theme.accentColor};
  }
`;