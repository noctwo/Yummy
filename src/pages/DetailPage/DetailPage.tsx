import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailPage.css"
import { SearchContext } from "../../context/context";
import SearchedItem from "../../components/SearchedItem/Searchitem";

export interface IMealDetail {
  meals: { [key: string]: null | string }[];
}

export interface Meal2 {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string | null;
  strIngredient17: string | null;
  strIngredient18: string | null;
  strIngredient19: string | null;
  strIngredient20: string | null;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string | null;
  strMeasure17: string | null;
  strMeasure18: string | null;
  strMeasure19: string | null;
  strMeasure20: string | null;
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string | null;
}

const DetailPage = () => {
  const [filter, setFilter] = useState<Meal2>(null!);
  const { mealid } = useParams<{ mealid?: string }>();
  const displaySearch = useContext(SearchContext);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => res.json())
      .then((data) => setFilter(data.meals[0]))
      .catch((err) => console.error("Fehler beim fehtchen", err));
  }, []);

  return (

    <>
   {displaySearch?.displaySearch ? <SearchedItem/> : 
    <div className="detail-view-wrapper">
      <div className="detail-img-wrapper">
      <img src={filter?.strMealThumb} alt="" />
      </div>
      <div className="detail-item-info">
        <div className="detail-item-info-text">
          <h2>{filter?.strMeal}</h2>
          <p>{filter?.strInstructions}</p>
        </div>
        <div className="ingredients-sidebar">
          <h3>Igredients</h3>
            <ul>
            <li>{filter?.strIngredient1}  {filter?.strMeasure1}</li>
            <li>{filter?.strIngredient2}  {filter?.strMeasure2}</li>
            <li>{filter?.strIngredient3}  {filter?.strMeasure3}</li>
            <li>{filter?.strIngredient4}  {filter?.strMeasure4}</li>
            <li>{filter?.strIngredient5}  {filter?.strMeasure5}</li>
            <li>{filter?.strIngredient6}  {filter?.strMeasure6}</li>
            <li>{filter?.strIngredient7}  {filter?.strMeasure7}</li>
            <li>{filter?.strIngredient8}  {filter?.strMeasure8}</li>
            <li>{filter?.strIngredient9}  {filter?.strMeasure9}</li>
            <li>{filter?.strIngredient10}  {filter?.strMeasure10}</li>
            <li>{filter?.strIngredient11}  {filter?.strMeasure11}</li>
            <li>{filter?.strIngredient12}  {filter?.strMeasure12}</li>
            <li>{filter?.strIngredient13}  {filter?.strMeasure13}</li>
            <li>{filter?.strIngredient14}  {filter?.strMeasure14}</li>
            <li>{filter?.strIngredient15}  {filter?.strMeasure15}</li>
            <li>{filter?.strIngredient16}  {filter?.strMeasure16}</li>
            <li>{filter?.strIngredient17}  {filter?.strMeasure17}</li>
            <li>{filter?.strIngredient18}  {filter?.strMeasure18}</li>
            <li>{filter?.strIngredient19}  {filter?.strMeasure19}</li>
            <li>{filter?.strIngredient20}  {filter?.strMeasure20}</li>
            </ul>
            <Link to={filter?.strYoutube}>
            <button>Watch on Youtube</button>
            </Link>
      </div>
      </div>
    </div>
    }
     </>
  );
};

export default DetailPage;
