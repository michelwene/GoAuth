import {
  Aside,
  AuthIcon,
  Container,
  Content,
  FormButton,
  FormGroup,
  FormLink,
} from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Input } from "components/Input";

const FormSignInSchema = yup.object({
  email: yup
    .string()
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
          <FormButton type="submit">Entrar</FormButton>
          <p>
            Seu primeiro acesso? <a>Criar conta</a>
          </p>
        </FormGroup>
      </Container>
    </Content>
  );
}
