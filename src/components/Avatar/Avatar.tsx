import styled, { css, CSSProp } from "styled-components";

export interface AvatarProps {
  src: string;
  size: 'md' | 'lg';
}

export interface StyledAvatarProps {
  sizeStyle: CSSProp;
}

export const SIZES = {
  md: css`
    --avatar-width: 20px;
    --avatar-height: 20px;
  `,
  lg: css`
    --avatar-width: 50px;
    --avatar-height: 50px;
  `,
};

export default function Avatar({ src, size }: AvatarProps) {
  const sizeStyle = SIZES[size];

  return (
    <StyledImg src={src} sizeStyle={sizeStyle} alt={`Avatar of the ${size} image`} />
  );
};

const StyledImg = styled.img<StyledAvatarProps>`
  ${(p) => p.sizeStyle};
  width: var(--avatar-width, 20px);
  height: var(--avatar-height, 20px);
  border-radius: 99%;
`;