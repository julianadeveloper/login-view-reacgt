import { useEffect, useState } from "react";
import { Button1, Button2 } from "./styles/profileCard";

interface ButtonCardPlayerProps {
  color: string;
  children: string;
}

//exemplo de como construir as funções e tipar
export function ButtonCardPlayer(props: ButtonCardPlayerProps) {
  const [textButton, setTextButton] = useState("");

  const add = () => {
    setTextButton("Adicionado ao carrinho");
  };
  const remove = () => {
    setTextButton("Removido do carrinho");
  };

  // useEffect(()=>{
  //   setTextButton('')
  // }, [textButton])

  // function ola(): void {
  //   console.log("olá");
  // }

  return (
    <div>
      <p>{textButton}</p>
      <Button1 onClick={() => add()} type="button" color={props.color}>
        {props.children}
      </Button1>
      <Button2 onClick={() => remove()} type="button" color={props.color}>
        {props.children}
      </Button2>
    </div>
  );
}
