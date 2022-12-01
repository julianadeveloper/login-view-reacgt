import { FormLogin } from "././FormLogin";
import { FormRegister } from "./FormRegister";

interface ComponentLoginProps {
  isActiveStateComponent: boolean;
}

export function Login(props: ComponentLoginProps) {
  return (
    <>
      <>
        <FormLogin isActiveStateComponent={(true)}></FormLogin>
      {/* <FormRegister isActiveStateComponent={(false)}></FormRegister> */}
      </>
    </>
  );
}
