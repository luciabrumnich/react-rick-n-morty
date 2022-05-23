import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";
  function fetchCharacters(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);
  return (
    <>
      <Navbar brand={"Rick n Morty"} />;
      <div className="container mt-5">
        <Characters characters={characters}/>
      </div>
    </>
  );
}

export default App;
