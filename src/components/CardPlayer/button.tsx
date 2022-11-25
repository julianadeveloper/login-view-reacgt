import { useEffect, useState } from "react";
import { Button } from "./styles/profileCard";

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

  // useEffect(()=>{
  //   setTextButton('')
  // }, [textButton])

  // function ola(): void {
  //   console.log("olá");
  // }

  return (
    <div>
      <p>{textButton}</p>
      <Button onClick={() => add()} type="button" color={props.color}>
        {props.children}
      </Button>
    </div>
  );
}
