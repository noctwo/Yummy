import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DetailPage.css"

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

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
      .then((res) => res.json())
      .then((data) => setFilter(data.meals[0]))
      .catch((err) => console.error("Fehler beim fehtchen", err));
  }, []);

  return (
    <div>
      <img src={filter?.strMealThumb} alt="" />
      <div className="item-info">
        <div>
          <h2>{filter?.strMeal}</h2>
          <h3>{filter?.strInstructions}</h3>
        </div>
        <div>
            <ul>
            <li>{filter?.strIngredient1}</li>
            <li>{filter?.strIngredient2}</li>
            <li>{filter?.strIngredient3}</li>
            <li>{filter?.strIngredient4}</li>
            <li>{filter?.strIngredient5}</li>
            <li>{filter?.strIngredient6}</li>
            <li>{filter?.strIngredient7}</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
