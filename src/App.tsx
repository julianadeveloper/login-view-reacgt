import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./components/NavBarHome/navBar";
import  './styles/global.css'

function App() {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="App">
      {/* <h1>Olá Mundo</h1>
      <p>{counter}</p>
      <button onClick={increment}>Add</button>
      <p>Aqui vai ficar a navbar</p> */}
      <NavBar />
    </div>
  );
}

export default App;
