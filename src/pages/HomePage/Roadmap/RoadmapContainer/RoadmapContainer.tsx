import styled from "styled-components";
import { StyledRoadmapWrapper } from "./RoadmapContainer.style";

export default function RoadmapContainer() {
  return (
    <StyledRoadmapWrapper>
      {/* <svg viewBox="129 164 1182 3339">
        <StyledGroup>
          <rect
            className="rect"
            x="300"
            y="200"
            width="277.3"
            height="37.3"
            rx="2"
            fill="rgb(255, 248, 234)"
            fill-opacity="1"
            stroke="rgb(0,0,0)"
            stroke-width="2.7">
          </rect>
          <text className="text" x="350" y="225" fill="rgb(0,0,0)" font-style="normal" font-weight="normal" font-size="17px">
            <tspan>DNS and how it works?</tspan>
          </text>
        </StyledGroup>
        <StyledGroup>
          <rect
            className="rect"
            x="600"
            y="200"
            width="175.3"
            height="47.3"
            rx="2"
            fill="rgb(194, 251, 151)"
            fill-opacity="1"
            stroke="rgb(0,0,0)"
            stroke-width="2.7">
          </rect>
          <text className="text" x="670" y="230" fill="rgb(0,0,0)" font-style="normal" font-weight="normal" font-size="17px">
            <tspan>DNS</tspan>
          </text>
          <circle cx="770" cy="205" r="10" fill="rgb(29, 28, 229)"></circle>
          <path d="M568.5 449L572.5 453 579 446.5" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </StyledGroup>
      </svg> */}
    </StyledRoadmapWrapper>
  );
};

const StyledGroup = styled.g`
  cursor: pointer;

  &:hover{
    .rect {
      fill: lightgray;
    }
    .text {
      fill: white;
    }
  }
`;