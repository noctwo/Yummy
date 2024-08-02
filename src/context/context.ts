import { createContext } from "react";
import { Category } from "../Food";

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