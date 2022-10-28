import styled from "styled-components";
import { StyledAvatarProps } from "@/utils/types/avatar";

export const StyledImg = styled.img<StyledAvatarProps>`
  ${(p) => p.sizeStyle};
  width: var(--avatar-width, 20px);
  height: var(--avatar-height, 20px);
  border-radius: 99%;
`;