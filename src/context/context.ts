import { createContext } from "react";
import { Category } from "../Food";
import { Meal2 } from "../pages/DetailPage/DetailPage";

interface ILoading {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const LoadingContext = createContext<ILoading | null>(null)

interface IFoodCategoriesContext {
    categories: Category[] | null;
    setCategory: React.Dispatch<React.SetStateAction<Category[] | null>>
}

export const CategoriesContext = createContext<IFoodCategoriesContext | null>(null)

interface ISearchResults {
    displaySearch: boolean;
    setDisplaySearch: React.Dispatch<React.SetStateAction<boolean>>
}

export const SearchContext = createContext<ISearchResults | null>(null)

interface ISearchResultData {
    searchResults: Meal2[] | null
    setSearchResults: React.Dispatch<React.SetStateAction<Meal2[] | null>>
    
}

export const SearchResultDataContext = createContext<ISearchResultData | null>(null)


interface ITheme {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ITheme | null>(null)
