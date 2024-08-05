import { useContext } from "react";
import "./CategoryList.css";
import { CategoriesContext } from "../../context/context";
import { Link } from "react-router-dom";
const CategoryList = () => {
  const categoriesData = useContext(CategoriesContext);

  return (
    <div className="category-wrapper">
      {categoriesData?.categories?.map((item, index) => (
        <div className ="category-card" key={index}>
          <Link to={`/category/${item.strCategory}`}>
            <h2>{item.strCategory}</h2>
            <img src={item.strCategoryThumb} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
