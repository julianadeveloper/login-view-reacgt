import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  padding: 1rem;
  width: 100%;
  background-color: #3db868;
`;

export const Content = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  list-style: none;
`;

export const Li = styled.li`
  font-weight: bold;
  display: flex;
`;
export const Button = styled.button`
  color: white;
  margin-left: 1%;
  width: 3rem;
  height: 3rem;
  border-radius: 8%;
  background-color: #ddd5d5d0;
  border: none;
  @media (max-width: 720px) {
    display: none;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 14vh;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  outline: none;
  border-radius: 7%;
  border: none;
  justify-content: center;
  align-items: center;
  display: flex;
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;
