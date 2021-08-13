import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
// eslint-disable-next-line
import { BrowserRouter, Route } from "react-router-dom";
import Main from "../Main/Main";
import GetDialogsService from "../../service/getDialogsService";

export default class App extends Component {
    getData = new GetDialogsService();
    render() {
        this.getData.getAllUsers().then((item) => console.log(item));
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
