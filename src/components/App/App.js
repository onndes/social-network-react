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
                <div>
                    <Header />
                </div>
                <div className='app-body-container'>
                    <div className='app-body'>
                        <div>
                            <Aside />
                        </div>
                        <div>
                            <Main
                                getAllUsers={this.getData.getAllUsers}
                                getAllComments={this.getData.getAllComments}
                                dispatch={this.props.dispatch}
                                store={this.props.store}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
