import * as React from "react";
import { useEffect, useState } from "react";
import { RecipeModel } from "../data/recipe-model";
import { RecipeFormat } from "./recipe-format";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { RouteComponentProps } from "react-router";
import { RepositoriesContext } from "../context";

interface Router {
    id: string;
}

export const SingleRecipe: React.FunctionComponent<RouteComponentProps<Router>> = ({ match }) => {
    const { recipeRepository } = React.useContext(RepositoriesContext);
    const [recipes, setRecipes] = useState<RecipeModel>(null);

    useEffect(() => {
        const result = match.params.id;
        setRecipes(recipeRepository.getById(result));
    });

    if (recipes == null) {
        return <p>Recipes are loading!</p>;
    }

    return (
        <div>
           <RecipeFormat recipe={recipes} />
        </div>
    );
};
