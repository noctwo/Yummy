import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CategoryItemsPage.css";
import DetailItem from "../../components/DetailItem/DetailItem";

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

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryname}`
    )
      .then((res) => res.json())
      .then((data) => setFilter(data.meals))
      .catch((err) => console.error("Fehler beim fehtchen", err));
  }, []);

  console.log(filter);

  return (
    <div className="category-wrapper">
      {filter?.map((item, index) => (
        <div key={index}>
          <Link to={`/category/meal/${item.idMeal}`}>
            <DetailItem item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryItemsPage;
