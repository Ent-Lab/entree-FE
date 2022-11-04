import { useEffect, useState } from "react";

import styled from "styled-components";

import CareerSearchTag from "../CareerSearchTag/CareerSearchTag";

interface tagProps {
  id: number,
  name: string;
}

const tags_data = [
  {
    id: 1,
    name: 'react'
  },
  {
    id: 2,
    name: 'javascript'
  },
  {
    id: 3,
    name: 'frontend'
  },
  {
    id: 4,
    name: 'backend'
  },
  {
    id: 5,
    name: 'devops'
  },
];

export default function CareerTagFilter() {
  const [toggleInput, setToggleInput] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [tagData, setTagData] = useState([]);

  const handleToggleInput = () => {
    setToggleInput((currentState) => !currentState);
  };

  const handleSelectedTag = (id: number, name: string) => {
    const newTag = {
      id,
      name
    };
  };

  useEffect(() => {
    setTagData(tagData);
  }, []);

  return (
    <StyledTagFilterWrapper>
      <input onClick={handleToggleInput} />
      <div>
        {selectedTags.map((tag: tagProps) => (
          <CareerSearchTag
            key={tag.id}
            tag={tag}
            onClick={handleSelectedTag}
          />
        ))}
      </div>
      {toggleInput &&
        <StyledSearchResult>
          {tags_data.map((tag: tagProps) => (
            <CareerSearchTag
              key={tag.id}
              tag={tag}
              onClick={handleSelectedTag}
            />
          ))}
        </StyledSearchResult>
      }
    </StyledTagFilterWrapper>
  );
}

const StyledTagFilterWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 30px;
  border: 1px solid ${(props) => props.theme.borderBottom};
  background-color: ${(props) => props.theme.cardColor};
  cursor: text;
`;

const StyledSearchResult = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  top: 30px;
  height: 60px;
  padding: 20px;
  background-color: ${(props) => props.theme.cardColor};
  border: 1px soild ${(props) => props.theme.borderBottom};
  border-radius: 10px;
`;
