import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { setUserData, setUserPhoto } from "./../../Store/Reducers/AuthReducer";
import { authMeAPI, profileAPI } from "../../API/API";

class HeaderClassContainer extends React.Component {
    componentDidMount() {
        authMeAPI.getAuthMe().then((data) => {
            if (data.resultCode === 0) {
                const { email, id, login } = data.data;
                this.props.setUserData(id, email, login);
            }
        });
        if (this.props.id) {
            profileAPI.getProfile(this.props.id).then((data) => {
                this.props.setUserPhoto(data.photos.small);
            });
        }
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

const HeaderContainer = connect(mapStateToProps, { setUserData, setUserPhoto })(
    HeaderClassContainer,
);

export default HeaderContainer;
