import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "../Header/HeaderContainer";

import Footer from "../Footer/Footer";

import BodyContainer from "../Body/BodyContainer";
export default class App extends Component {
    render() {
        return (
            <div className='app'>
                <div>
                    <HeaderContainer />
                </div>
                <div className='app-body-container'>
                    <BodyContainer />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
