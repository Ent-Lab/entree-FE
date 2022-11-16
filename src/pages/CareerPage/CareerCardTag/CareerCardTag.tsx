import styled from "styled-components";

export default function CareerCardTag({ tag }) {
  return (
    <StyledTag>{tag.name}</StyledTag>
  );
}

export const StyledTag = styled.div`
  padding: 4px 8px;
  color: white;
  background-color: #6565ff;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: 500;
`;