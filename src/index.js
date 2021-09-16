import React from "react";
import ReactDOM from "react-dom";

import "./prog-track.css";
import "./styles.css";
import {WebForm} from "./WebForm";



function App() {
    return (
        <div className="App">
            {/*<h1>React multi step</h1>*/}
            <WebForm/>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App/>, rootElement);
