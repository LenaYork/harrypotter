import logo from './logo.svg';
import './App.css';
import { SearchForm } from "./components/SearchForm/SearchForm"; 
import { Card } from "./components/Card/Card";
import { useState } from "react";

function App() {

  const [characterName, setCharacterName] = useState("name");
  const [house, setHouse] = useState("house");
  const [resultTitle, setResultTitle] = useState("");
  const [charactersArray, setChractersArray] = useState([]);

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
    //if there's no name then house search
    if (characterName === "name" && house !== "house") {
      console.log("no character!, house search");
      setResultTitle(`All ${house} characters:`);
      fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
        .then(response => response.json())
        .then(array => setChractersArray(array))
    }

    if (characterName !== "name" && house === "house") {
      //if there's no house then name search
      console.log("no house! so only name search");
      setResultTitle(`All characters with the name ${characterName}`);
      fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(array => {
          const filteredArray = array.filter(person => person.name.includes(characterName));
          setChractersArray(filteredArray);
        })
    }

    if (characterName === "name" && house === "house") {
      setResultTitle("Please write in either a character name or a house name");
      setChractersArray([]);
    }

    if (characterName !== "name" && house !== "house") {
      //if both name and house are chosen
      console.log("both are chosen!");
      setResultTitle(`All ${house} characters with the name ${characterName}`);
      fetch("https://hp-api.onrender.com/api/characters")
        .then(response => response.json())
        .then(array => {
          const filteredArray = array.filter(person => person.name.includes(characterName) &&  person.house === house);
          setChractersArray(filteredArray);
        })
    }
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
      <section className="cards-container">
        <h3>{resultTitle}</h3>
        <div className="cards">
          {charactersArray.map(character => (
            <Card 
              key={character.id}
              img={character.image}
              name={character.name}
              species={character.species}
              house={character.house}
              dateOfBirth={character.dateOfBirth}
              wand={character.wand.core}
              ancestry={character.ancestry}
              patronus={character.patronus}
              actor={character.actor}
            />
          ))}
      </div>
        
        {/* <Card />
        <Card /> */}
      </section>
      <footer className="footer">
        <p>All rights reserved &copy; 2023</p>
      </footer>
    </div>
  );
}

export default App;
