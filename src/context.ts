import { createContext } from "react";
import { RecipeRepository } from "./data/recipe-repository";

interface RepositoriesContext {
    recipeRepository: RecipeRepository;
}

export const initialiseRepositories = (): RepositoriesContext => {
    return {
        recipeRepository: new RecipeRepository()
    };
};

export const RepositoriesContext = createContext<RepositoriesContext>(undefined);
