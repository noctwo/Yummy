import { useState } from "react";
import "./Suche.css";
import { Meal2 } from "../../pages/DetailPage/DetailPage";

const Suche = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Meal2 | null>(null);


  const check = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => setSearchResults(data))
      .catch((err) => console.error("Fehler beim fehtchen", err));
      console.log(searchResults)
  };

  return (
    <div>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <button onClick={check}>Search</button>
    </div>
  );
};

export default Suche;
