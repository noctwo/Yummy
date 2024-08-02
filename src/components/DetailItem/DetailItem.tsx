import { Link } from "react-router-dom";
import { Meal } from "../../pages/CategoryItemsPage/CategoryItemsPage";
import "./DetailItem.css"

interface MealItemProps {
    item: Meal
}

const DetailItem: React.FC<MealItemProps> = (props) => {
    return (
        <div>
            <Link to={`/category/meal/${props.item.idMeal}`}>
            <h1>{props.item.strMeal}</h1>
            <img src={props.item.strMealThumb} alt="" />
            </Link>
        </div>

    );
}
 
export default DetailItem;