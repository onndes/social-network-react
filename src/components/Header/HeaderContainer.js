import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { authMe, logoutMe } from "../../Store/Reducers/AuthReducer";

class HeaderClassContainer extends React.Component {
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
        fullName: state.auth.fullName,
    };
};

const HeaderContainer = connect(mapStateToProps, { authMe, logoutMe })(HeaderClassContainer);

export default HeaderContainer;
