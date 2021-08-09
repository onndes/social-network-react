import React, { Component } from "react";
import style from "./App.module.css";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

export default class App extends Component {
    render() {
        return (
            <div className={style.app}>
                <Header />
                <Aside />
                <Main />
                <Footer />
            </div>
        );
    }
}
