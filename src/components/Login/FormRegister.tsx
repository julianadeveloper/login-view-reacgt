import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  return (
    <ContainerLogin>

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
            }}
          >
            Register
          </BtnRegister>

      </ContentLeft>
    </ContainerLogin>
  );
}
