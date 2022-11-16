import styled from "styled-components";

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