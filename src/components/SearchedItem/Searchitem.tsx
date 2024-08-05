import { useContext } from "react";
import { SearchResultDataContext } from "../../context/context";

const SearchedItem = () => {
  const searchResultData = useContext(SearchResultDataContext);

console.log(searchResultData?.searchResults)

  return (
    <div>
      <h1>hola</h1>
      {searchResultData
        ? searchResultData?.searchResults?.map((item, index) => (
            <div key={index}>
              <h1>{item.idMeal}</h1>
            </div>
          ))
        : null}
    </div>
  );
};

export default SearchedItem;
