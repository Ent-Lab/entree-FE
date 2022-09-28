import { InputProps } from "@/types/input";
import { StyledInput } from "./Input.style";
import { SIZES } from "./Input.variant";

export default function Input({ label, value, size, type = 'text', placeholder, disabled, onChange }: InputProps) {
  const sizeStyle = SIZES[size];

  return (
    <>
      <label htmlFor={`${label}-input`}>
        {label}
      </label>
      <StyledInput
        id={`${label}-input`}
        value={value}
        sizeStyle={sizeStyle}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}
