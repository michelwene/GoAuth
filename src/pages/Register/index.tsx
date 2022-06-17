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
import { FormRegisterSchema } from "Shared/Validators/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUserContext } from "context/userContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "services/firebase";

type CredentialsData = {
  email: string;
  password: string;
};

export function RegisterUser() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(FormRegisterSchema),
  });

  const navigate = useNavigate();

  async function registerUser({ email, password }: CredentialsData) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      reset();
      toast(
        <CustomToast
          status="success"
          title="Sucesso!"
          message="Usuário cadastrado com sucesso!!"
        />
      );
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err);
      toast(
        <CustomToast
          status="error"
          title="Ops..."
          message="Ocorreu um erro ao realizar o cadastro, verifique o e-mail/senha."
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
        <FormGroup onSubmit={handleSubmit(registerUser)}>
          <h2>Registrar-se</h2>
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
