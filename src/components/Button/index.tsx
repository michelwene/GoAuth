import { forwardRef, ForwardRefRenderFunction } from "react";
import { FormButton } from "./styles";

interface ButtonProps {
  type: "submit" | "button";
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonBase: ForwardRefRenderFunction<HTMLButtonElement, ButtonProps> = (
  { type, children },
  ref
) => {
  return <FormButton type={type}>{children}</FormButton>;
};

export const Button = forwardRef(buttonBase);
