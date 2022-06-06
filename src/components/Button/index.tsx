import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormButton } from "./styles";

interface ButtonProps {
  type: "submit" | "button";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { type, disabled, children },
  ref
) => {
  return (
    <FormButton type={type} disabled={disabled}>
      {children}
    </FormButton>
  );
};

export const Button = forwardRef(buttonBase);
