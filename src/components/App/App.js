import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";

import Main from "../Main/Main";
import GetDialogsService from "../../Service/getDialogsService";

export default class App extends Component {
    getData = new GetDialogsService();
    render() {
        return (
            <div className='app'>
                <Header />
                <Aside />
                <Main
                    getAllUsers={this.getData.getAllUsers}
                    getAllComments={this.getData.getAllComments}
                    dispatch={this.props.dispatch}
                    store={this.props.store}
                />
                <Footer />
            </div>
        );
    }
}
