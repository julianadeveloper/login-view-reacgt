import { useState } from "react";
import {Input} from "./styles/NavBar.module"
interface InputProductsProps {
  search: string;
}

export function InputProducts({ search }: InputProductsProps) {
  const [searchText, setSearchText] = useState("");
  return (
    <div>
      <Input placeholder="nome do produto"></Input>
    </div>
  );
}
