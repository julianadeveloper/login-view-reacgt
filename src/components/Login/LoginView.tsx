import { FormRegister } from "./FormRegister";

interface ComponentRegisterProps {
  isActiveStateComponent: boolean;
}

export function Login(props: ComponentRegisterProps) {
  return (
    <>
      <>
        {/* <FormLogin isActiveStateComponent={(true)}></FormLogin> */}
      <FormRegister isActiveStateComponent={(false)}></FormRegister>
      </>
    </>
  );
}
