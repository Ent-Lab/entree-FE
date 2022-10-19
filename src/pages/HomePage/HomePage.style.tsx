import styled from "styled-components";

export const StyledHomePage = styled.div`
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
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: red;
  width: 100%;
  height: 10%;
`;

export const StyledLoadmapWrapper = styled.div`
  width: 100%;
  height: 90%;
  background-color: tomato;
`;

export const StyledCategories = styled.ul`
  position: absolute;
  top: 50;
  left: 50;
`;

export const StyledSelectButton = styled.input`
  width: 300px;
  border: none;
  border-radius: 15px;
  padding: 10px;
`;