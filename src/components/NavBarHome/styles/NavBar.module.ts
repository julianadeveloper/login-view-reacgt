import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  background-color: #3db868;
  height: 14%;

`;

export const Content = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
`;

export const Ul = styled.ul`
  display: flex;
  padding: 1rem;
  list-style: none;
`;

export const Li = styled.li`
  display: flex;
  justify-content: center;
`;
export const Button = styled.button`
  color: white;
  margin-left: 1%;
  width: 4rem;
  border-radius: 8%;
  background-color: #ddd5d5d0;
  border: none;
  @media (max-width: 720px){
  display: none;
}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  outline: none;
  border-radius: 5%;
  border: none;
  display: flex;
@media (max-width: 720px){
  display: none;
}
`;
