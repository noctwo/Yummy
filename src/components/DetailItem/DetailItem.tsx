import { Link } from "react-router-dom";
import { Meal } from "../../pages/CategoryItemsPage/CategoryItemsPage";
import "./DetailItem.css";

interface MealItemProps {
    item: Meal;
}

const DetailItem: React.FC<MealItemProps> = (props) => {
    return (
        <Link to={`/category/meal/${props.item.idMeal}`} className="category-card">
            <h2>{props.item.strMeal}</h2>
            <img src={props.item.strMealThumb} alt={props.item.strMeal} />
        </Link>
    );
};

export default DetailItem;
