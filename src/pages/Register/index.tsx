import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { Container, Content, FormGroup } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const FormRegisterSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
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

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormRegisterSchema),
  });

  async function handleFormSubmit(data) {
    console.log(data);
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
          <h2>Acessar Conta</h2>
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
          <Button type="submit">Cadastrar</Button>
        </FormGroup>
      </Container>
    </Content>
  );
}
