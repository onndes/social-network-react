import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "../Header/HeaderContainer";

import Footer from "../Footer/Footer";
import GetDialogsService from "../../Service/getDialogsService";
import BodyContainer from "../Body/BodyContainer";
export default class App extends Component {
    getData = new GetDialogsService();
    render() {
        return (
            <div className='app'>
                <div>
                    <HeaderContainer />
                </div>
                <div className='app-body-container'>
                    <BodyContainer
                        getAllUsers={this.getData.getAllUsers}
                        getAllComments={this.getData.getAllComments}
                        dispatch={this.props.dispatch}
                        store={this.props.store}
                    />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        );
    }
}
