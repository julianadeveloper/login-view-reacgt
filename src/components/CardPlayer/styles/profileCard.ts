import styled from "styled-components";

export const ContentDescription = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;

   p{
    padding: 0.1rem;
    margin: 0.1rem;
  }
`;
export const Content = styled.div`
  display: flex;

`;
export const Button = styled.button`
  color: white;
  margin-left: 1%;
  width: 3rem;
  height: 100%;
  border-radius: 8%;
  background-color: #74992e;
  border: none;
  position: relative;
`;
export const Photo = styled.img`
border-radius: 5%;

  background-color: blue;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 80%;
  width: 100%;
`;
export const Container = styled.div`
  max-width: 17rem;
  height: 100%;
  display: flex;
  background-color: white;
  flex-direction: column;
  margin: 1rem;
  border-radius: 5%;
  margin: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0.5, 0.5);
`;
