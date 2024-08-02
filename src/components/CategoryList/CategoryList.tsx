import { useContext } from "react";
import "./CategoryList.css"
import { CategoriesContext } from "../../context/context";
const CategoryList = () => {
    const categoriesData = useContext(CategoriesContext)


    return (
        <div>
            {categoriesData?.categories?.map((item, index) => (
                <h1 key={index}>{item.strCategory}</h1>
            ))}
        </div>

    );
}
 
export default CategoryList;