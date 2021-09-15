import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import store from "./Store/Store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root"),
);
