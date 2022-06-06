import { forwardRef, ForwardRefRenderFunction } from "react";
import { ButtonProps } from "types/button";
import { FormButton } from "./styles";

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
