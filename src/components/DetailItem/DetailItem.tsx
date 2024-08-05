import { Link } from "react-router-dom";
import { Meal } from "../../pages/CategoryItemsPage/CategoryItemsPage";
import "./DetailItem.css"

interface MealItemProps {
    item: Meal
}

const DetailItem: React.FC<MealItemProps> = (props) => {
    return (
        <div className ="category-card">
            <Link to={`/category/meal/${props.item.idMeal}`}>
            <h2>{props.item.strMeal}</h2>
            <img src={props.item.strMealThumb} alt="" />
            </Link>
        </div>

    );
}
 
export default DetailItem;