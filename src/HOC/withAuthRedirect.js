import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const withAuthRedirectConnect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />;
        return <Component {...props} />;
    };
    const withAuthRedirect = connect(mapStateToProps, {})(RedirectComponent);
    return withAuthRedirect
};
export default withAuthRedirectConnect;
