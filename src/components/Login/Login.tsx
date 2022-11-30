import {
  InputLogin,
  BtnLogin,
  ContainerLogin,
  Label,
  ContentLeft,
  ContentRight,
  FormLogin,
  InputsIcon,
  FormRegister,
} from "./styles/stlye";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fas);

export function Login() {
  const Login = () => {
    alert("Olá");
  }
  const Register = () => {
    alert("Olá");
  }
  return (
    <ContainerLogin>
      <ContentLeft>
        <FormRegister>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"user"} />
              </span>
            </Label>
            <InputLogin type="text" placeholder="Fullname"></InputLogin>
          </InputsIcon>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"envelope"} />
              </span>
            </Label>
            <InputLogin type="email" placeholder="Email"></InputLogin>
          </InputsIcon>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"lock"} />
              </span>
            </Label>
            <InputLogin type="password" placeholder="Password"></InputLogin>
          </InputsIcon>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"lock"} />
              </span>
            </Label>
            <InputLogin
              type="password"
              placeholder="Confirm Password"
            ></InputLogin>
          </InputsIcon>
        <BtnLogin onClick={Register}>Register</BtnLogin>
        </FormRegister>
        <></>
      </ContentLeft>
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
        <BtnLogin onClick={Login}>Entrar</BtnLogin>
      </ContentRight>
    </ContainerLogin>
  );
}
