import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "../Header/HeaderContainer";

import Footer from "../Footer/Footer";

import BodyContainer from "../Body/BodyContainer";
import { connect } from "react-redux";

class AppContainer extends Component {
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

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default connect(mapStateToProps, {})(AppContainer);
