import {
  Aside,
  AuthIcon,
  Container,
  Content,
  FormButton,
  FormGroup,
  FormInput,
  FormLabel,
  FormLink,
  InputGroup,
} from "./styles";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormSignInSchema = yup.object({
  email: yup.string().required("E-mail obrigatório").trim(),
  password: yup
    .string()
    .required("Senha obrigatória")
    .typeError("Senha inválida")
    .min(6, "Senha muito curta")
    .max(20, "Senha muito longa")
    .trim(),
});

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSignInSchema),
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  async function handleFormSubmit() {
    console.log("Submit");
  }

  return (
    <Content>
      <Aside />
      <Container>
        <div>
          <h1>GoAuth</h1>
          <span>
            <AuthIcon />
          </span>
        </div>
        <FormGroup onSubmit={handleSubmit(handleFormSubmit)}>
          <h2>Acessar Conta</h2>
          <InputGroup>
            <FormInput placeholder=" " type="email" {...register("email")} />
            <FormLabel>E-mail</FormLabel>
          </InputGroup>
          <InputGroup>
            <FormInput
              placeholder=" "
              type={showPassword ? "text" : "password"}
              {...register("password")}
            />
            <FormLabel>Senha</FormLabel>
            <button type="button" onClick={handleShowPassword}>
              {showPassword ? (
                <AiFillEyeInvisible fontSize="30px" />
              ) : (
                <AiFillEye fontSize="30px" />
              )}
            </button>
          </InputGroup>
          <FormLink>Esqueci minha senha</FormLink>
          <FormButton type="submit">Entrar</FormButton>
          <p>
            Seu primeiro acesso? <a>Criar conta</a>
          </p>
        </FormGroup>
      </Container>
    </Content>
  );
}
