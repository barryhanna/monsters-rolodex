import React, { useState, useEffect } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) => setMonsters(users))
    );
  });

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox handleChange={handleChange} placeholder="search monsters..." />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
