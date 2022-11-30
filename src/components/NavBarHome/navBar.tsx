import { ButtonSearchNav } from "./button";
import { InputProducts } from "./InputSearchNav";
import UrlnavBar from "./urlNav";
import { Nav, Container, Content } from "./styles/NavBar.module";

export function NavBar() {
  return (
    <Container>
      <Nav>
        <p>Total de pts: 89</p>
        <Content>
          <UrlnavBar linkName="Home" href="#" />
          <UrlnavBar linkName="Menu" href="#" />
          <UrlnavBar linkName="Ranking" href="#" />
          <UrlnavBar linkName="Shop" href="#" />
        </Content>
        {/* <Content>
          <InputProducts search="text" />
          <ButtonSearchNav text="tomato">Search</ButtonSearchNav>
        </Content> */}
      </Nav>
    </Container>
  );
}
