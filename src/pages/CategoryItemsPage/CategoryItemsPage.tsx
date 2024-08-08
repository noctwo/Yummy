// CategoryItemsPage.tsx
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CategoryItemsPage.css";
import DetailItem from "../../components/DetailItem/DetailItem";
import { SearchContext } from "../../context/context";
import SearchedItem from "../../components/SearchedItem/Searchitem";

export interface IFiltederedMeals {
  meals: Meal[];
}

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const CategoryItemsPage = () => {
  const [filter, setFilter] = useState<Meal[] | null>(null);
  const { categoryname } = useParams<{ categoryname?: string }>();
  const displaySearch = useContext(SearchContext);

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryname}`
    )
      .then((res) => res.json())
      .then((data) => setFilter(data.meals))
      .catch((err) => console.error("Fehler beim fehtchen", err));
  }, [categoryname]);

  return (
    <>
    {displaySearch?.displaySearch ? <SearchedItem/> :
    <div className="category-wrapper">
      {filter?.map((item, index) => (
        <div key={index}>
          <DetailItem item={item} />
        </div>
      ))}
    </div>}
    </>
  );
};

export default CategoryItemsPage;
