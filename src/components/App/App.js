import React, { Component } from "react";
import "./App.css";
import HeaderContainer from "../Header/HeaderContainer";
import Footer from "../Footer/Footer";
import BodyContainer from "../Body/BodyContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import { startInitial } from "../../Store/Reducers/AppReducer";
import AppPreloader from "./../../Common/AppPreloader/AppPreloader";
import { withRouter } from "react-router";
class App extends Component {
    componentDidMount() {
        this.props.startInitial();
    }

    render() {
        if (!this.props.initialSucsses) {
            return <AppPreloader />;
        }

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
        initialSucsses: state.app.initialSucsses,
    };
};

export default compose(withRouter, connect(mapStateToProps, { startInitial }))(App);
