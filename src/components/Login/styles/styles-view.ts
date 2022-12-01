import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 640) {
    font-size: 87.5%;
  }
`;

export const ButtonSelect = styled.button`
  border-radius: 5%;
  border: none;
  color: white;
  background-color: blueviolet;
  width: 10rem;
  height: 2rem;
  position: absolute;
  z-index: 9999;
  display: flex;
  bottom: 12rem;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-weight:600;
  padding:0.25rem;
`;

