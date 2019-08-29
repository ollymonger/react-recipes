import * as React from "react";
import * as ReactDOM from "react-dom";
import { RepositoriesContext, initialiseRepositories } from "./context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AllRecipes } from "./recipes/recipes";

const repositories = initialiseRepositories();

const App: React.FunctionComponent = () => {
    return (
        <RepositoriesContext.Provider value={repositories}>
            <Router>
                <Route path="/" exact component={AllRecipes} />
            </Router>
        </RepositoriesContext.Provider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("approot")
);
