import { StyledInputProps } from "@/utils/types/input";

import styled from "styled-components";

export const StyledInput = styled.input<StyledInputProps>`
  ${(p) => p.sizeStyle}
  width: var(--input-width, 300px);
  height: var(--input-height, 34px);
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.textColor};
  color: inherit;
  background-color: transparent;
  caret-color: ${(props) => props.theme.textColor};
  outline: none;
`;

export const StyledLabel = styled.label`
  display: none;
`;