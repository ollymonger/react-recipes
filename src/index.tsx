import * as React from "react";
import * as ReactDOM from "react-dom";

const App: React.FunctionComponent = () => {
    return <h1>Hello world!</h1>;
};

ReactDOM.render(
    <App />,
    document.getElementById("approot")
);
