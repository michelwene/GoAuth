import { ErrorInput } from "components/ErrorInput";
import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
} from "react";
import { FieldError } from "react-hook-form";
import { FormLabel, InputGroup, InputLayout } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error: FieldError;
  type: string;
  label: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, type, label, ...rest },
  ref
) => {
  return (
    <InputGroup>
      <InputLayout name={name} id={name} ref={ref} type={type} />
      <FormLabel>*{label}</FormLabel>
      {!!error && <ErrorInput>{error.message}</ErrorInput>}
    </InputGroup>
  );
};

export const Input = forwardRef(InputBase);
