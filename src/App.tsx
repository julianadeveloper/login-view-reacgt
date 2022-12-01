import React from "react";
import "./App.css";
import { Login } from "./components/Login/Login";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      {/* 
      <NavBar />
      <ProfilePlayer/> */}
      <div className="LoginView">
        <Login isActiveStateComponent={false} />
      </div>
    </div>
  );
}

export default App;
