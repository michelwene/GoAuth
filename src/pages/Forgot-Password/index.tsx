import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Container, Content, FormGroup } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const FormForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("E-mail obrigatório")
    .trim(),
});

export function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(FormForgotPasswordSchema),
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
          <h2>Informe seu E-mail.</h2>
          <Input
            label="E-mail"
            type="text"
            {...register("email")}
            error={errors.email}
          />
          <Button type="submit">Enviar</Button>
        </FormGroup>
      </Container>
    </Content>
  );
}
