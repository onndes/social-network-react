import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./components/App/AppContainer";
import "./index.css";
import store from "./Store/Store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root"),
);
