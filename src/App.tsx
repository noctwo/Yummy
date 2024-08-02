import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CategoryItems from "./pages/CategoryItemsPage";
import DetailPage from "./pages/DetailPage";
import { useState } from "react";
import { CategoriesContext, LoadingContext } from "./context/context";
import LoadingPage from "./pages/Loading/LoadingPage";
import { Category } from "./Food";

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [categories, setCategory] = useState<Category[] | null>(null)

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <CategoriesContext.Provider value={{ categories, setCategory }}>
      {loading ? (
        <LoadingPage />
      ) : (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<CategoryItems />} />
            <Route path="/" element={<DetailPage />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
      </CategoriesContext.Provider>
    </LoadingContext.Provider>
  );
}

export default App;
