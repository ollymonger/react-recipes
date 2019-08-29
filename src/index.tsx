import * as React from "react";
import * as ReactDOM from "react-dom";
import { RepositoriesContext, initialiseRepositories } from "./context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AllRecipes } from "./recipes/recipes";

const repositories = initialiseRepositories();

const App: React.FunctionComponent = () => {
    return (
        <Router>
            <RepositoriesContext.Provider value={repositories}>
                <Route path="/" exact component={AllRecipes} />
            </RepositoriesContext.Provider>
        </Router>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("approot")
);
