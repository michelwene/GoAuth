import { Container, Content, FormGroup } from "./styles";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Link, useNavigate } from "react-router-dom";
import { PayLoadData } from "types/auth";
import { FormSignInSchema } from "components/Shared/Validators/schema";
import { toast } from "react-toastify";
import { CustomToast } from "components/CustomTostfy";
import { useUserContext } from "context/userContext";

export function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(FormSignInSchema),
  });

  const { signIn } = useUserContext();

  async function handleFormSubmit({ email, password }: PayLoadData) {
    try {
      await signIn({ email, password });

      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Login efetuado com sucesso!"
        />
      );
      reset();
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message={
            "E-mail e/ou senha Incorretos" ??
            "Ocorreu um erro ao realizar o Login."
          }
        />
      );
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
