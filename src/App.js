import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import "react-datepicker/dist/react-datepicker.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App flex h-full">
      <div className="bg-blue-950 p-8"></div>
      <div className="m-10 w-full">
        <h1 className="text-xl font-semibold"> Analytics</h1>
        <Header />
        <Container />
      </div>
    </div>
  );
}

export default App;
