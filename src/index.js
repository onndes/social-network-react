import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import store from "./Store/Store";
const rerenderEntireTree = (state) => {
    // debugger;
    ReactDOM.render(
        <App newsPage={state.newsPage} dispatch={store.dispatch.bind(store)} store={store} />,
        document.getElementById("root"),
    );
};
rerenderEntireTree(store.getState());
store.subscribe(() => {
    const state = store.getState();
    rerenderEntireTree(state);
});
