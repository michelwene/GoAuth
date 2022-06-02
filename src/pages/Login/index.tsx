import { Container, Content, FormGroup, FormLink } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { Banner } from "components/Banner";
import { Button } from "components/Button";

const FormSignInSchema = yup.object({
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

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormSignInSchema),
  });

  async function handleFormSubmit() {
    console.log("Submit");
  }

  return (
    <Content>
      <Banner />
      <Container>
        <Logo />
        <FormGroup onSubmit={handleSubmit(handleFormSubmit)}>
          <h2>Acessar Conta</h2>
          <Input
            label="E-mail"
            type="email"
            {...register("email")}
            error={errors.email}
          />
          <Input
            type="password"
            label="Senha"
            {...register("password")}
            error={errors.password}
            showPasswordButton
          />
          <FormLink>Esqueci minha senha</FormLink>
          <Button type="submit">Entrar</Button>
          <p>
            Seu primeiro acesso? <a>Criar conta</a>
          </p>
        </FormGroup>
      </Container>
    </Content>
  );
}
