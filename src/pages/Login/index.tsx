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

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
            <FormInput
              required
              placeholder=" "
              type={showPassword ? "text" : "password"}
            />
            <FormLabel>Senha</FormLabel>
            <button type="button" onClick={handleShowPassword}>
              {showPassword ? (
                <AiFillEyeInvisible fontSize="30px" />
              ) : (
                <AiFillEye fontSize="30px" />
              )}
            </button>
          </InputGroup>
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
