import { useContext } from "react";
import { SearchResultDataContext } from "../../context/context";
import { Link } from "react-router-dom";

const SearchedItem = () => {
  const searchResultData = useContext(SearchResultDataContext);



  return (
    <div className="category-wrapper">
      {searchResultData
        ? searchResultData?.searchResults?.map((item, index) => (
            <Link
              to={`/category/meal/${item.idMeal}`}
              className="category-card"
              key={index}
            >
              <h2>{item.strMeal}</h2>
              <img src={item.strMealThumb} alt="" />
            </Link>
          ))
        : null}
    </div>
  );
};

export default SearchedItem;
