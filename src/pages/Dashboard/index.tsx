import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { Container, Content, InfoUser } from "./styles";
import { GoSignOut } from "react-icons/go";

export function Dashboard() {
  return (
    <Content>
      <Banner />
      <Container>
        <div>
          <Logo />
          <Button type="button">
            Sair <GoSignOut fontSize={20} />
          </Button>
        </div>
        <InfoUser>
          <h1>Dashboard</h1>
          <p>Usuário logado: </p>
        </InfoUser>
      </Container>
    </Content>
  );
}
