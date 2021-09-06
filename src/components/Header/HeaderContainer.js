import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authMe } from "../../Store/Reducers/AuthReducer";

class HeaderClassContainer extends React.Component {
    componentDidMount() {
        this.props.authMe(this.props.id);
    }

    render() {
        return <Header {...this.props} />;
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        id: state.auth.id,
        email: state.auth.email,
        isAuth: state.auth.isAuth,
        photo: state.auth.photo,
    };
};

const HeaderContainer = connect(mapStateToProps, { authMe })(HeaderClassContainer);

export default HeaderContainer;
