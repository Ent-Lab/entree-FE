import { InputProps } from "@/utils/types/input";

import { SIZES } from "./Input.variant";

import { StyledInput, StyledLabel } from "./Input.style";

export default function Input({ label, size, ...rest }: InputProps) {
  const sizeStyle = SIZES[size];

  return (
    <>
      <StyledLabel htmlFor={`${label}-input`}>
        {label}
      </StyledLabel>
      <StyledInput
        id={`${label}-input`}
        sizeStyle={sizeStyle}
        {...rest}
      />
    </>
  );
}
