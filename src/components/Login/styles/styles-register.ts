import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640) {
    font-size: 87.5%;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 25%;
  height: 50vh;
  background-color: transparent;
  flex-direction: column;
  border: 1px solid white;
`;
export const RegisterLink = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const LoginLink = styled.div`
  position: absolute;
  display: flex;
  margin-bottom: 27rem;
  margin-left: 3rem;
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1;
  width: 25%;
  height: 50vh;
  background-color: burlywood;
`;

export const FormRegister = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Label = styled.label`
  color: white;
  line-height: 2;
`;

export const InputRegister = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 2rem;
  border-radius: 5%;
  background-color: transparent;
  border-bottom: 1px solid blueviolet;
  color: white;
  margin: 0.25rem;
  padding: 0.5rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: white;
    padding: 0.25rem;
  }

`;

export const InputsIcon = styled.div`
  justify-content: flex-start;
  display: flex;
  padding: 1rem;
`;
export const BtnLogin = styled.button`
  margin-top: 1rem;
  width: 12rem;
  height: 3rem;
  font-weight: 600;
  color: #6959cd;
  background-color: var(--white);
  border: none;
`;
export const BtnRegister = styled.button`
  margin-top: 1rem;
  width: 80%;
  height: 3rem;
  font-weight: 600;
  color: #6959cd;
  background-color: var(--white);
  border: none;
  @media (max-width: 640) {
    font-size: 87.5%;
  }
  &:hover {
    background-color: blueviolet;
    color: var(--white);
  }
`;
