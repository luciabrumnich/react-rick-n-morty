import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Characters from "./Components/Characters";
import Pagination from "./Components/Pagination";

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character";
  function fetchCharacters(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((error) => console.log(error));
  }

  function onPrev() {
    fetchCharacters(info.prev);
  }
  function onNext() {
    fetchCharacters(info.next);
  }

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);
  return (
    <>
      <Navbar brand={"Rick n Morty"} />
      <div className="container mt-5">
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
        <Characters characters={characters} />
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrev={onPrev}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default App;
