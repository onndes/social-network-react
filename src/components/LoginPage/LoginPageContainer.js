import React from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
// import { withRouter, useHistory } from "react-router-dom";
import LoginPage from "./LoginPage";
import { loginMe } from "../../Store/Reducers/AuthReducer";

const LoginContainer = (props) => {
    // const history = useHistory();
    // if (props.isAuth) history.goBack();

    return <LoginPage {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading,
    };
};

const LoginPageContainer = connect(mapStateToProps, { loginMe })(withRouter(LoginContainer));

export default LoginPageContainer;
