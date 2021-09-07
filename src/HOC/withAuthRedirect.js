import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />;
        return <Component {...props} />;
    };
    const withAuthRedirectConnect = connect(mapStateToProps, {})(RedirectComponent);
    return withAuthRedirectConnect;
};
export default withAuthRedirect;
