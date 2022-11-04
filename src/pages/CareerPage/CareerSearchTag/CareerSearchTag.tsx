import styled from "styled-components";

export default function CareerSearchTag({ tag, onClick }) {
  return (
    <StyledTagButton onClick={() => onClick(tag.id, tag.name)}>
      {tag.name}
    </StyledTagButton>
  );
}

const StyledTagButton = styled.button`
  cursor: pointer;  
  display: flex;
  padding: 4px 8px;
  color: white;
  background-color: #6565ff;
  border: none;
  border-radius: 10px;
`;
