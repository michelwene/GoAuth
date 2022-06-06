import { InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  error: FieldError;
  type: string;
  label: string;
  onClick?: () => void;
  showPasswordButton?: boolean;
}
