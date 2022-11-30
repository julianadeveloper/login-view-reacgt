import {
  InputLogin,
  BtnLogin,
  ContainerLogin,
  Label,
  ContentLeft,
  ContentRight,
  FormLogin,
  InputsIcon,
} from "./styles/stlye";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

export function Login() {
  function alerta() {
    alert("Olá");
  }
  return (
    <ContainerLogin>
      <ContentLeft>PEITA PRA TU VER FDP</ContentLeft>
      <ContentRight>
        <FormLogin>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"envelope"} />
              </span>
            </Label>
            <InputLogin placeholder="Email"></InputLogin>
          </InputsIcon>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"lock"} />
              </span>
            </Label>
            <InputLogin type="password" placeholder="Password"></InputLogin>
          </InputsIcon>
        </FormLogin>
        <BtnLogin onClick={alerta}>Entrar</BtnLogin>
      </ContentRight>
    </ContainerLogin>
  );
}
