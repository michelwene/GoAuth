import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { Container, Content, InfoUser } from "./styles";
import { GoSignOut } from "react-icons/go";
import { useUserContext } from "context/userContext";

export function Dashboard() {
  const { user, logoutUser } = useUserContext();

  return (
    <Content>
      <Banner />
      <Container>
        <div>
          <Logo />
          <Button type="button" onClick={logoutUser}>
            Sair <GoSignOut fontSize={20} />
          </Button>
        </div>
        <InfoUser>
          <h1>Dashboard</h1>
          <p>Usuário logado:{user.email} </p>
        </InfoUser>
      </Container>
    </Content>
  );
}
