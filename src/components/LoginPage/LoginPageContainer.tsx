import { AppStateType } from './../../Store/Store';
import React from "react";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import LoginPage from "./LoginPage";
import { loginMe } from "../../Store/Reducers/AuthReducer";

type IStateProps = {
  isAuth:boolean
  isLoading: boolean
  captchaUrl: string | null
}

type IDispatchProps = {
  loginMe: () => void
}

type PropsType = IStateProps & IDispatchProps

const LoginContainer: React.FC<PropsType & RouteComponentProps | any> = (props) => {
    return <LoginPage {...props} />;
};

const mapStateToProps = (state: AppStateType): IStateProps => {
    return {
        isAuth: state.auth.isAuth,
        isLoading: state.auth.isLoading,
        captchaUrl: state.auth.captchaUrl,
    };
};

const LoginPageContainer = connect(mapStateToProps, { loginMe })(withRouter(LoginContainer));

export default LoginPageContainer;
