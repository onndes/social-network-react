import { connect } from "react-redux";
import { compose } from "redux";
import Body from "./Body";
import { withRouter } from "react-router-dom";

const BodyContainer = (props) => {
    return <Body {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default compose(connect(mapStateToProps, {}), withRouter)(BodyContainer);
