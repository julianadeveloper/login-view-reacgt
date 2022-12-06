import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  BtnRegister,
  ContainerLogin,
  ContentLeft, InputRegister,
  InputsIcon,
  Label
} from "./styles/styles-register";


export function FormRegister() {
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
            type="button"
          >
            Register
          </BtnRegister>

      </ContentLeft>
    </ContainerLogin>
  );
}
