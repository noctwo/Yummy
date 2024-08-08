import { useContext, useEffect, useState } from "react";
import "./CategoryList.css";
import { CategoriesContext } from "../../context/context";
import { Link } from "react-router-dom";
import { Meal2 } from "../../pages/DetailPage/DetailPage";
const CategoryList = () => {
  const categoriesData = useContext(CategoriesContext);

  const [random, setRandom] = useState<Meal2 | null>(null);


useEffect(()=> {
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
  .then((res) => res.json())
  .then((data) => setRandom(data.meals[0]))
  .catch((err) => console.error("Fehler beim fehtchen", err));
  
},[])

  return (
    <div className="category-wrapper">
      {categoriesData?.categories?.map((item, index) => (
        <div className="category-card" key={index}>
          <Link to={`/category/${item.strCategory}`}>
            <h2>{item.strCategory}</h2>
            <img src={item.strCategoryThumb} alt="" />
          </Link>
        </div>
      ))}
      <Link to={`/category/meal/${random?.idMeal}`}><div className="random-button">Random</div></Link>
    </div>
  );
};

export default CategoryList;
