import { CSSProp } from "styled-components";

export interface AvatarProps {
  src: string;
  size: 'sm' | 'md' | 'lg';
}

export interface StyledAvatarProps {
  sizeStyle: CSSProp;
}