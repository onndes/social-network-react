import { connect } from "react-redux";
import { compose } from "redux";
import Body from "./Body";

const BodyContainer = (props) => {
    return <Body {...props} />;
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    };
};

export default compose(connect(mapStateToProps, {}))(BodyContainer);
