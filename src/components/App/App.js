import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import GetDialogsService from "../../service/getDialogsService";

export default class App extends Component {
    getData = new GetDialogsService();
    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <Header />
                    <Aside />
                    <Main
                        getAllUsers={this.getData.getAllUsers}
                        getAllComments={this.getData.getAllComments}
                        messagesPage={this.props.messagesPage}
                        dispatch={this.props.dispatch}
                    />
                    <Footer />
                </div>
            </BrowserRouter>
        );
    }
}
