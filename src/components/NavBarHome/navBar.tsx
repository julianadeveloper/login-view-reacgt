import { ButtonSearchNav } from "./button";
import { InputProducts } from "./InputSearchNav";
import UrlnavBar from "./urlNav";
import { Nav, Container, Content } from "./styles/NavBar.module";

export function NavBar() {
  return (
    <Container>
      <Nav>
        <UrlnavBar linkName="Home" href="#" />
        <UrlnavBar linkName="Menu" href="#" />
        <UrlnavBar linkName="Contato" href="#" />
        <UrlnavBar linkName="Carrinho" href="#" />
        <Content>
          <InputProducts search="text" />
          <ButtonSearchNav text="tomato">Search</ButtonSearchNav>
        </Content>
      </Nav>
    </Container>
  );
}
