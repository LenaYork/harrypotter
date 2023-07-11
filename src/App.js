import logo from './logo.svg';
import './App.css';
import { Input } from "./components/Input/Input"; 
import { useState } from "react";

function App() {

  const [characterName, setCharacterName] = useState("name");
  const [house, setHouse] = useState("house");

  const saveCharacterName = (event) => {
    setCharacterName(event.target.value);
    console.log(event.target.value);
  }

  const getCharacterByName = () => {
    //fetch
    console.log("characterName", characterName)
  }

  const saveHouseName = (event) => {
    setHouse(event.target.value);
    console.log(event.target.value);
  }

  const getCharacterByHouse = () => {
    //fetch
    console.log("house", house);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>harry potter</h1>
        <h2>characters</h2>
      </header>
      <section className="queries">
        <Input 
          placeholder="name"
          characterName={characterName}
          onChange={saveCharacterName}
          onClick={getCharacterByName}
        />
        <Input 
          placeholder="house"
          house={house}
          onChange={saveHouseName}
          onClick={getCharacterByHouse}
        />
      </section>
      <section className="cards"></section>
      <footer className="footer">
        <p>All rights reserved &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;
