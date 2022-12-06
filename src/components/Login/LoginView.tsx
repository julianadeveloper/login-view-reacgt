import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";
import { RegisterLink } from "./styles/styles-register";
import { ButtonSelect, Container } from "./styles/styles-view";
library.add(fas);
interface ComponentRegisterProps {
  isActiveStateComponent: boolean;
}

export function Login(props: ComponentRegisterProps) {
  const [isActiveLogin, setIsActiveLogin] = useState<Boolean>(true);
  const [isActiveRegister, setIsActiveRegister] = useState<Boolean>(false);
  let changeRegisterState = () => {
    setIsActiveRegister(!isActiveRegister);
    setIsActiveLogin(!isActiveLogin);
  };

  let handleNameChange = () => {
    setIsActiveRegister(!isActiveRegister);
  };

  // useEffect(()=>{
  //   isActiveStateComponent
  // }, [])
  return (
    <>
      <Container>
        <RegisterLink>
          {/* Esse botão é um estilo e não um component a parte */}
          <ButtonSelect
            type="button"
            onClick={() => {
              handleNameChange();
              changeRegisterState();
            }}
          >
            {isActiveRegister ? "Login" : "Registre-se"} 
          </ButtonSelect>
        </RegisterLink>
        {isActiveRegister && <FormRegister></FormRegister>}

        {isActiveLogin && <FormLogin></FormLogin>}
      </Container>
    </>
  );
}
