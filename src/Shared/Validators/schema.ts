import * as yup from "yup";

export const FormRegisterSchema = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("E-mail obrigatório")
    .trim(),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(6, "Senha muito curta")
    .max(20, "Senha muito longa"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senha não conferem"),
});

export const FormForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("E-mail obrigatório")
    .trim(),
});

export const FormSignInSchema = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("E-mail obrigatório")
    .typeError("E-mail inválido"),

  password: yup
    .string()
    .required("Senha obrigatória")
    .typeError("Senha inválida")
    .min(6, "Senha muito curta")
    .max(20, "Senha muito longa")
    .trim(),
});
