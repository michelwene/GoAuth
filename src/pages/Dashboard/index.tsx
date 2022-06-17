import { Banner } from "components/Banner";
import { Button } from "components/Button";
import { Logo } from "components/Logo";
import { Container, Content, InfoUser } from "./styles";
import { GoSignOut } from "react-icons/go";
import { useUserContext } from "context/userContext";
import { handleDestroyCookies } from "utils/destroyCookies";
import { useNavigate } from "react-router-dom";

export function Dashboard() {
  const { user, logoutUser } = useUserContext();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      logoutUser();
      await handleDestroyCookies("userData");
      await handleDestroyCookies("accessToken");
      await handleDestroyCookies("refreshToken");
      navigate("/");
    } catch (err) {
      alert("error");
    }
  }

  return (
    <Content>
      <Banner />
      <Container>
        <div>
          <Logo />
          <Button type="button" onClick={() => handleLogout()}>
            Sair <GoSignOut fontSize={20} />
          </Button>
        </div>
        <InfoUser>
          <h1>Dashboard</h1>
          <p>Usuário logado:{user?.email} </p>
        </InfoUser>
      </Container>
    </Content>
  );
}
