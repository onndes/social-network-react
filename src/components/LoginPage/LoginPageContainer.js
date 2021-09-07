import React from "react";
import { connect } from "react-redux";
import { withRouter, useHistory } from "react-router-dom";
import LoginPage from "./LoginPage";

const LoginContainer = (props) => {
    const history = useHistory();
    if (props.isAuth) history.goBack();
    return <LoginPage {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const LoginPageContainer = connect(mapStateToProps, {})(withRouter(LoginContainer));

export default LoginPageContainer;
