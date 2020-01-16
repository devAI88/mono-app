import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetch("api/greeting?name=cool")
      .then(res => {
        res.json();
      })
      .then(greeting => setGreeting(greeting))
      .catch(err => {});
  }, []);
  return (
    <div className="App">
      <header className="App-header">{greeting}</header>
    </div>
  );
}

export default App;
