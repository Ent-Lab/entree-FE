import { AvatarProps } from "@/utils/types/avatar";

import { StyledImg } from "./Avatar.style";

import { SIZES } from "./Avatar.variant";

import defaultProfile from '@/assets/images/defaultProfile.jpeg';

export default function Avatar({ src, size }: AvatarProps) {
  const sizeStyle = SIZES[size];

  return (
    <StyledImg src={src || defaultProfile} sizeStyle={sizeStyle} alt={`Avatar of the ${size} image`} />
  );
};