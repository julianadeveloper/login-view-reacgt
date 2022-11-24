import { Button } from "./styles/NavBar.module";

interface ButtonSearchNavProps {
  text: string;
  children: string;
}
export function ButtonSearchNav(props: ButtonSearchNavProps) {
  //exemplo de como construir as funções e tipar

  const emitAlert = () => alert("Nhae");

  // function ola(): void {
  //   console.log("olá");
  // }

  return( <Button onClick={emitAlert}>{props.children}</Button>)
}