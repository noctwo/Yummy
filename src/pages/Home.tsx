import { useContext } from "react";
import CategoryList from "../components/CategoryList/CategoryList";
import { SearchContext } from "../context/context";
import SearchedItem from "../components/SearchedItem/Searchitem";

const Home = () => {
  const displaySearch = useContext(SearchContext);
  
  
  return (
    <div>

        { displaySearch?.displaySearch ? <SearchedItem/> : <CategoryList />}
      
    </div>
  );
};

export default Home;
