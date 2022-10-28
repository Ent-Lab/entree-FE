import { StyledButton } from "./Button.style";
import { ButtonProps } from "@/utils/types/button";
import { SIZES, VARIANTS } from "./Button.variant";

export default function Button({ disabled, size, variant, children, onClickHandler }: ButtonProps) {
  const sizeStyle = SIZES[size];
  const variantStyle = VARIANTS[variant];

  return (
    <StyledButton onClick={(e) => onClickHandler(e)} disabled={disabled} sizeStyle={sizeStyle} variantStyle={variantStyle}>
      {children}
    </StyledButton>
  );
}