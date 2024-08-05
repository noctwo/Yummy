import { useContext, useState } from "react";
import "./Suche.css";
import { SearchContext, SearchResultDataContext } from "../../context/context";

const Suche = () => {
  const [search, setSearch] = useState<string>("");
  const searchResultData = useContext(SearchResultDataContext);

  const displaySearch2 = useContext(SearchContext);

  const check = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => searchResultData?.setSearchResults(data.meals))
      .catch((err) => console.error("Fehler beim fehtchen", err));
    displaySearch2?.setDisplaySearch(true);
  };

  console.log(searchResultData?.searchResults);

  return (
    <div>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <button onClick={check}>Search</button>
    </div>
  );
};

export default Suche;
