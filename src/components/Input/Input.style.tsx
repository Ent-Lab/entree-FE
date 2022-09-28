import { StyledInputProps } from "@/types/input";
import styled from "styled-components";

export const StyledInput = styled.input<StyledInputProps>`
  ${(p) => p.sizeStyle}
`;