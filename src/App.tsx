import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CategoryItems from "./pages/CategoryItemsPage/CategoryItemsPage";
import DetailPage, { Meal2 } from "./pages/DetailPage/DetailPage";
import { useState } from "react";
import {
  CategoriesContext,
  LoadingContext,
  SearchContext,
  SearchResultDataContext,
} from "./context/context";
import LoadingPage from "./pages/Loading/LoadingPage";
import { Category } from "./Food";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategory] = useState<Category[] | null>(null);
  const [displaySearch, setDisplaySearch] = useState<boolean>(false);
  const [searchResults, setSearchResults] = useState<Meal2[] | null>(null);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <CategoriesContext.Provider value={{ categories, setCategory }}>
        <SearchResultDataContext.Provider value={{searchResults, setSearchResults}}>
          <SearchContext.Provider value={{ displaySearch, setDisplaySearch }}>
            {loading ? (
              <LoadingPage />
            ) : (
              <BrowserRouter>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/category/:categoryname"
                    element={<CategoryItems />}
                  />
                  <Route
                    path="/category/meal/:mealid"
                    element={<DetailPage />}
                  />
                </Routes>
                <Footer />
              </BrowserRouter>
            )}
          </SearchContext.Provider>
        </SearchResultDataContext.Provider>
      </CategoriesContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
