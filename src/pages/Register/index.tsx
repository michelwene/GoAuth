import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { Container, Content, FormGroup } from "./styles";
import { useForm } from "react-hook-form";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { PayLoadData } from "types/auth";
import { toast } from "react-toastify";
import { CustomToast } from "components/CustomTostfy";
import { FormRegisterSchema } from "components/Shared/Validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContext } from "context/userContext";

export function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(FormRegisterSchema),
  });
  const { registerUser } = useUserContext();
  const navigate = useNavigate();

  async function handleFormSubmit({ email, name, password }: PayLoadData) {
    try {
      await registerUser({ email, name, password });
      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Usuário cadastrado com sucesso!"
        />
      );
      reset();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message={
            "E-mail já existente" ??
            "Não foi possível realizar o cadastro do usuário."
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
          <Link to="/">
            <Button type="button">
              <AiOutlineArrowLeft fontSize={20} />
              Voltar
            </Button>
          </Link>
        </div>
        <FormGroup onSubmit={handleSubmit(handleFormSubmit)}>
          <h2>Registrar-se</h2>
          <Input
            label="Nome Completo"
            type="name"
            {...register("name")}
            error={errors.name}
          />
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
          <Input
            type="password"
            label="Confirmar Senha"
            {...register("password_confirmation")}
            error={errors.password_confirmation}
            showPasswordButton
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </FormGroup>
      </Container>
    </Content>
  );
}
