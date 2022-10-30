import Input from "@/components/Input/Input";

import styled from "styled-components";

import { BsSearch } from "@react-icons/all-files/bs/BsSearch";

export default function BoardSearch({ onChange }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    onChange(value);
  };

  return (
    <StyledBoardSearch>
      <StyledSearch>
        <BsSearch />
      </StyledSearch>
      <Input label="search" size="sm" onChange={handleChange} />
    </StyledBoardSearch >
  );
}

const StyledBoardSearch = styled.div`
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
