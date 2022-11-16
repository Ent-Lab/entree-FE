import Input from "@/components/Input/Input";

import styled from "styled-components";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

export default function SearchForm({ onChange }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    onChange(value);
  };

  return (
    <StyledSearchWrapper>
      <StyledSearch>
        <BsSearch />
      </StyledSearch>
      <Input label="search" size="sm" onChange={handleChange} />
    </StyledSearchWrapper >
  );
}

const StyledSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 10px;
  font-size: 2.2rem;
  padding-right: 20px;
  color: ${(props) => props.theme.textColor}
`;

const StyledSearch = styled.div`
  cursor: pointer;
`;