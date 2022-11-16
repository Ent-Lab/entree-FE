import { CSSProp } from "styled-components";

export interface InputProps {
  label: string;
  value?: string;
  type?: string;
  name?: string;
  size: 'sm' | 'md' | 'lg' | 'xlg';
  placeholder?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface StyledInputProps {
  sizeStyle: CSSProp;
}