import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  BtnRegister,
  ContainerLogin,
  ContentLeft, InputRegister,
  InputsIcon,
  Label
} from "./styles/styles-register";

interface ComponentLoginProps {
  isActiveStateComponent: boolean;
}

export function FormRegister(props: ComponentLoginProps) {
  function Register() {
    alert("Olá");
  }

  const [isActiveRegister, setIsActiveRegister] = useState<Boolean>(false);
  let checkActiveRegister = isActiveRegister;
  let changeRegisterState = () => setIsActiveRegister(!isActiveRegister);

  return (
    <ContainerLogin>
    {/*           <RegisterLink>
          <RegisterButton>Register</RegisterButton>
        </RegisterLink>*/}
      <ContentLeft>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"user"} />
              </span>
            </Label>
            <InputRegister type="text" placeholder="Fullname"></InputRegister>
          </InputsIcon>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"envelope"} />
              </span>
            </Label>
            <InputRegister type="email" placeholder="Email"></InputRegister>
          </InputsIcon>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"lock"} />
              </span>
            </Label>
            <InputRegister type="password" placeholder="Password"></InputRegister>
          </InputsIcon>
          <InputsIcon>
            <Label>
              <span>
                <FontAwesomeIcon icon={"lock"} />
              </span>
            </Label>
            <InputRegister
              type="password"
              placeholder="Confirm Password"
            ></InputRegister>
          </InputsIcon>
          <BtnRegister
            onClick={() => {
              Register();
              changeRegisterState();
            }}
          >
            Register
          </BtnRegister>

      </ContentLeft>
    </ContainerLogin>
  );
}
