import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";
import { RegisterLink } from "./styles/styles-register";
import { Container, ButtonSelect } from "./styles/styles-view";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
interface ComponentRegisterProps {
  isActiveStateComponent: boolean;
}

export function Login(props: ComponentRegisterProps) {
  const [isActiveLogin, setIsActiveLogin] = useState<Boolean>(true);
  const [isActiveRegister, setIsActiveRegister] = useState<Boolean>(false);
  let estado = isActiveRegister;
  let changeRegisterState = () => {
    setIsActiveRegister(!isActiveRegister);
    setIsActiveLogin(!isActiveLogin);
  };

  let handleNameChange = () => {
    setIsActiveRegister(!isActiveRegister);
  };
  return (
    <>
      <Container>
        <RegisterLink>
          {/* Esse botão é um estilo e não um component a parte */}
          <ButtonSelect
            onClick={() => {
              handleNameChange();
              changeRegisterState();
            }}
          >
            {isActiveRegister ? "Login" : "Register"}
          </ButtonSelect>
        </RegisterLink>
        {isActiveRegister && (
          <FormRegister isActiveStateComponent={false}></FormRegister>
        )}

        {isActiveLogin && <FormLogin></FormLogin>}
      </Container>
    </>
  );
}
