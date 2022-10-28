import { CSSProp } from "styled-components";

export interface AvatarProps {
  src: string;
  size: 'md' | 'lg';
}

export interface StyledAvatarProps {
  sizeStyle: CSSProp;
}