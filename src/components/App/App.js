import React, { Component } from "react";
import { compose } from "redux";
import "../../Common/Sanitize.css";
import "./App.css";
import { connect } from "react-redux";
import HeaderContainer from "../Header/HeaderContainer";
// import Footer from "../Footer/Footer";
import BodyContainer from "../Body/BodyContainer";
import { startInitial } from "../../Store/Reducers/AppReducer";
import AppPreloader from "./../../Common/AppPreloader/AppPreloader";
import { withRouter } from "react-router";
class App extends Component {
    componentDidMount() {
        this.props.startInitial(this.props.authId);
    }

    render() {
        if (!this.props.initialSucsses) return <AppPreloader />;

        return (
            <div className='app'>
                <HeaderContainer />
                <BodyContainer />
                {/* <Footer /> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialSucsses: state.app.initialSucsses,
        profileUserID: state.auth.authId,
    };
};

export default compose(withRouter, connect(mapStateToProps, { startInitial }))(App);
