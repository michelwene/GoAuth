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

export function Login() {
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
        <FormGroup>
          <h2>Acessar Conta</h2>
          <InputGroup>
            <FormInput required placeholder=" " type="email" />
            <FormLabel>E-mail</FormLabel>
          </InputGroup>
          <InputGroup>
            <FormInput required placeholder=" " type="password" />
            <FormLabel>Senha</FormLabel>
          </InputGroup>
          <FormLink>Esqueci minha senha</FormLink>
          <FormButton>Entrar</FormButton>
          <p>
            Seu primeiro acesso? <a>Criar conta</a>
          </p>
        </FormGroup>
      </Container>
    </Content>
  );
}
