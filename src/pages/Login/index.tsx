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
            <FormLabel>E-mail</FormLabel>
            <FormInput />
          </InputGroup>
          <InputGroup>
            <FormLabel>Senha</FormLabel>
            <FormInput />
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
