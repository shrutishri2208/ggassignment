import React, { useState } from "react";
import Header from "./components/Header";
import "react-datepicker/dist/react-datepicker.css";
import Container from "./components/Container";
import Settings from "./components/Settings";

function App() {
  const [isSettings, setIsSettings] = useState(true);
  return (
    <div className="App flex h-full">
      <div className="bg-blue-950 p-8"></div>
      <div className="m-10 w-full">
        <h1 className="text-2xl font-semibold"> Analytics</h1>
        <Header isSettings={isSettings} setIsSettings={setIsSettings} />
        {isSettings && <Settings />}
        <Container />
      </div>
    </div>
  );
}

export default App;
