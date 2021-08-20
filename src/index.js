import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";
import store from "./redux/state";
const updateTree = (store) => {
    ReactDOM.render(
        <App
            messagesPage={store.state.messagesPage}
            dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById("root"),
    );
};
updateTree(store);
store.subscribe(updateTree);
