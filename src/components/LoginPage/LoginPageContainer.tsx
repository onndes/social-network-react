import { AppStateType } from './../../Store/Store';
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import { loginMe } from "../../Store/Reducers/AuthReducer";

type MapPropsType = {
  isAuth:boolean
  isLoading: boolean
  captchaUrl: string | null
}

type MapDispatchType = {
  loginMe: () => void
}

type PropsType = MapPropsType & MapDispatchType 

const LoginContainer: React.FC<PropsType | any> = (props) => {
    return <LoginPage {...props} />;
};

const mapStateToProps = (state: AppStateType): MapPropsType => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading,
        captchaUrl: state.auth.captchaUrl,
    };
};

const LoginPageContainer = connect(mapStateToProps, { loginMe })(withRouter(LoginContainer));

export default LoginPageContainer;
