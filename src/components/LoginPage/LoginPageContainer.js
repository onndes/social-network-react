import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// import { withRouter, useHistory } from "react-router-dom";
import LoginPage from "./LoginPage";
import { loginMe } from "../../Store/Reducers/AuthReducer";

const LoginContainer = (props) => {
    return <LoginPage {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading,
        captchaUrl: state.auth.captchaUrl,
    };
};

const LoginPageContainer = connect(mapStateToProps, { loginMe })(withRouter(LoginContainer));

export default LoginPageContainer;
