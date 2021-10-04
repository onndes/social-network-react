import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import store from "./Store/Store";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
    document.getElementById("root"),
);
