import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  BtnLogin,
  ContainerLogin,
  ContentRight,
  InputLogin,
  InputsIcon,
  Label
} from "./styles/styles-login";


export function FormLogin() {
  const Login = () => {
    alert("Olá");
  };
  // const [isActiveRegister, setIsActiveRegister] = useState<Boolean>(false);
  // let checkActiveRegister = isActiveRegister;

  return (
    <ContainerLogin >

      <ContentRight>
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
        <BtnLogin onClick={Login}>Login</BtnLogin>
      </ContentRight>
    </ContainerLogin>
  );
}
