import { Container, Content, FormGroup } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Link, useNavigate } from "react-router-dom";
import { PayLoadData } from "types/auth";
import { FormSignInSchema } from "Shared/Validators/schema";
import { useUserContext } from "context/userContext";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(FormSignInSchema),
  });

  const { signIn, error } = useUserContext();
  const navigate = useNavigate();

  async function handleFormSubmit({ email, password }: PayLoadData) {
    try {
      await signIn({ email, password });
      navigate("/dashboard");
    } catch (err) {
      alert(error);
    }
  }

  return (
    <Content>
      <Banner />
      <Container>
        <div>
          <Logo />
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
          <Link to="/resgatar-senha">Esqueci minha senha</Link>
          <Button type="submit">
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>
          <p>
            Seu primeiro acesso? <Link to="/registrar-se">Criar conta</Link>
          </p>
        </FormGroup>
      </Container>
    </Content>
  );
}
