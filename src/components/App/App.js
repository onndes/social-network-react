import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
// eslint-disable-next-line
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../Main/Main";

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <Header />
                    <Aside />
                    <Main />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
