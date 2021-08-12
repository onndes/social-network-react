import React, { Component } from "react";
// import style from "Main.module.css";
import { Route } from "react-router-dom";
import MessagesPage from "../MessagesPage/MessagesPage";
import NewsPage from "../NewsPage/NewsPage";
import HomePage from "../HomePage/HomePage";

export default class Main extends Component {
    render() {
        return (
            <div>
                <Route path='/home' component={HomePage} />
                <Route path='/messages' component={MessagesPage} />
                <Route path='/news' component={NewsPage} />
            </div>
        );
    }
}
