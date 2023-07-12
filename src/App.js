import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/SearchForm/SearchForm"; 
import { useState } from "react";

function App() {

  const [characterName, setCharacterName] = useState("name");
  const [house, setHouse] = useState("house");

  const saveCharacterName = (event) => {
    setCharacterName(event.target.value);
    console.log(event.target.value);
  }

  const saveHouseName = (event) => {
    setHouse(event.target.value);
    console.log(event.target.value);
  }

  const searchForCharacters = () => {
    //fetch
    console.log("house", house);
    console.log("characterName", characterName);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>harry potter</h1>
        <h2>characters</h2>
      </header>
        <SearchForm 
          characterName={characterName}
          saveCharacterName={saveCharacterName}
          saveHouseName={saveHouseName}
          onClick={searchForCharacters}
          house={house}
        />
        {/* <Input 
          placeholder="house"
          house={house}
          onChange={saveHouseName}
          onClick={getCharacterByHouse}
        /> */}

      <section className="cards"></section>
      <footer className="footer">
        <p>All rights reserved &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;
