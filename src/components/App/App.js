import React, { Component } from "react";
import style from "./App.module.css";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "../Main/Main";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className={style.app}>
                    <Header />
                    <Aside />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
