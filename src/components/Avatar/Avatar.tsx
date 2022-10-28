import { AvatarProps } from "@/utils/types/avatar";
import { StyledImg } from "./Avatar.style";
import { SIZES } from "./Avatar.variant";

export default function Avatar({ src, size }: AvatarProps) {
  const sizeStyle = SIZES[size];

  return (
    <StyledImg src={src} sizeStyle={sizeStyle} alt={`Avatar of the ${size} image`} />
  );
};