import { StyledInputProps } from "@/types/input";

import styled from "styled-components";

export const StyledInput = styled.input<StyledInputProps>`
  ${(p) => p.sizeStyle}
  width: var(--input-width, 300px);
  height: var(--input-height, 34px);
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 1rem;
  outline: none;
`;

export const StyledLabel = styled.label`
  display: none;
`;