import styled from "styled-components";

export const ContentDescription = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.25rem;
  color: var(--white);

  p {
    padding: 0.1rem;
    line-height: 1.5;
    font-weight: 400;
  }
`;
export const Content = styled.div`
  display: flex;
`;
export const Button1 = styled.button`
  color: white;
  margin-left: 1%;
  width: 3rem;
  height: 100%;
  border-radius: 8%;
  background-color: #74992e;
  border: none;
  position: relative;
`;
export const Button2 = styled.button`
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
  background-color: blue;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
`;
export const Container = styled.div`
  max-width: 17rem;
  height: 100%;
  display: flex;
  background-color: var(--blue-dark);
  flex-direction: column;
  margin: 1rem;
  border-radius: 5%;
  margin: 0.5rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0.5, 0.5);
`;
