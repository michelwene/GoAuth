import { ErrorInput } from "components/ErrorInput";
import { forwardRef, ForwardRefRenderFunction, useState } from "react";
import { FormLabel, InputGroup, InputLayout } from "./styles";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { InputProps } from "types/input";

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, error = null, type, label, showPasswordButton, onClick, ...rest },
  ref
) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <>
      <InputGroup>
        <InputLayout
          name={name}
          id={name}
          ref={ref}
          type={isShowPassword ? "text" : type}
          {...rest}
        />
        <FormLabel>{label}</FormLabel>
        {type === "password" && showPasswordButton && (
          <button
            type="button"
            onClick={() => setIsShowPassword(!isShowPassword)}
          >
            {isShowPassword ? (
              <AiFillEyeInvisible fontSize="30px" />
            ) : (
              <AiFillEye fontSize="30px" />
            )}
          </button>
        )}
      </InputGroup>
      {!!error ? <ErrorInput>{error.message}</ErrorInput> : null}
    </>
  );
};

export const Input = forwardRef(InputBase);
