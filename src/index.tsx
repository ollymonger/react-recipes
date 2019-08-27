import * as React from "react";
import * as ReactDOM from "react-dom";
import { RepositoriesContext, initialiseRepositories } from "./context";

const repositories = initialiseRepositories();

const App: React.FunctionComponent = () => {
    return (
        <RepositoriesContext.Provider value={repositories}>
            <h1>Hello world!</h1>
        </RepositoriesContext.Provider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById("approot")
);
