import { StyledAuthForm } from "./AuthLandingForm.style";

interface AuthLandingFormProps {
  children?: React.ReactNode;
}

export default function AuthLandingForm({ children }: AuthLandingFormProps) {
  return <StyledAuthForm>{children}</StyledAuthForm>;
};
