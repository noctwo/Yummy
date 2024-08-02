import { useContext, useEffect } from "react";
import "./LoadingPage.css"
import { CategoriesContext, LoadingContext } from "../../context/context";

const LoadingPage = () => {
const loadingContextYummy = useContext(LoadingContext)
const categoriesData = useContext(CategoriesContext)

useEffect(() => {
    setTimeout(() => {
        loadingContextYummy?.setLoading(false)
    }, 2000)

}, [])

useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res => res.json())
        .then(data => categoriesData?.setCategory(data.categories))
        .catch(err => console.error("Fehler beim fehtchen", err))
}, [])

    return (
        <h1>Loading...</h1>
        
    );
}
 
export default LoadingPage;