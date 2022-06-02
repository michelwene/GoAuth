import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Input } from "components/Input";
import { Logo } from "components/Logo";
import { Container, Content, FormGroup } from "./styles";

export function Register() {
  return (
    <Content>
      <Banner />
      <Container>
        <Logo />
        <FormGroup>
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
          <Button type="submit">Cadastrar</Button>
        </FormGroup>
      </Container>
    </Content>
  );
}
