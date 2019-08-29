import * as React from "react";
import * as ReactDOM from "react-dom";
import { RepositoriesContext, initialiseRepositories } from "./context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AllRecipes } from "./recipes/recipes";
import { SingleRecipe } from "./recipes/single-recipe";

const repositories = initialiseRepositories();

const App: React.FunctionComponent = () => {
    return (
        <RepositoriesContext.Provider value={repositories}>
            <Router>
                <Route path="/" exact component={AllRecipes} />
                <Route path="/recipe/:id" exact component={SingleRecipe} />
            </Router>
        </RepositoriesContext.Provider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("approot")
);
